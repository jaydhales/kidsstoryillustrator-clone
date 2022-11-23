import { unlink } from 'fs';

import { Request, Response } from 'express';
import { BaseHandler } from '../../interfaces';
import { generate } from 'stability-client';
import { uploadImage } from './cloudinary';

class getApiImage extends BaseHandler {
  static async getApiImages(req: Request, res: Response) {
    const { userPrompt } = req.body;
		const samplesNo = 10;

		const imagePathArr: string[] = [];

    if (userPrompt != null && userPrompt.length > 4) {
			if (process.env.DREAMSTUDIO_API_KEY) {
					const api = generate({
						width: 512,
						height: 512,
						prompt: userPrompt,
						apiKey: process.env.DREAMSTUDIO_API_KEY
							? process.env.DREAMSTUDIO_API_KEY
							: '',
						outDir: './images',
						// outDir: uploadImage()
						samples: samplesNo
					});

					api.on('image', (args: { filePath: string; }) => {
						imagePathArr.push(args.filePath);
					});
					
					api.on('end', (data: any) => {
						console.log('Generating Complete', data);
						const imageLinkArr: Array<string> = [];
						for (let i = 0; i < imagePathArr.length; i++) {
							uploadImage(imagePathArr[i]).then((response) => {
								imageLinkArr.push(response);
								unlink(imagePathArr[i], () => {
									console.log('');
								})
								console.log('Image Uploaded Successfully')
							})
						}
						setTimeout(() => {
							console.log(imageLinkArr);
							if (imageLinkArr.length < samplesNo) {
								res.status(200).send('Error fetching images. Try again!')
							}
							else {
								return res.status(200).send({
									data: 'the links now available',
									links_array: imageLinkArr
								})
							}
						}, 90000);
					});
				} else {
        console.log('API KEY MISSING');
      }
    }
	} 
}

export default getApiImage;
