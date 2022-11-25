import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
	secure: true,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME
});

export const uploadImage = async (imagePath: string): Promise<any> => {
	const options = {
		use_filename: true,
    unique_filename: false,
    overwrite: true
	};

	try {
		const result = cloudinary.uploader.upload(imagePath, options);
		return (await result).secure_url;
	} catch (error) {
		console.log(error);
		return error;
	}
};

