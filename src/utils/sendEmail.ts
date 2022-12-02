import nodemailer from 'nodemailer';
import { google } from 'googleapis';
const OAuth2 = google.auth.OAuth2;


const sendEmail = async(email: any, subject: any, text: any) => {
    try {
        // const transporter = nodemailer.createTransport({
        //     host: process.env.PORT,
        //     service: process.env.SERVICE,
        //     port: 587,
        //     secure: true,
        //     auth: {
        //         user: 'jigah4july@gmail.com',
        //         pass: 'parliament24'
        //     }
        // });


        const transporter = nodemailer.createTransport({
            host: process.env.PORT,
            port: 587,
            service: process.env.SERVICE,
            secure: true,
            auth: {
              type: 'OAuth2',
              user: 'jigah4july@gmail.com',
              clientId: '436047847806-1g500jutav81d00hs9388dijsoluftsk.apps.googleusercontent.com',
              clientSecret: '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',
              refreshToken: process.env.REFRESH_TOKEN,
              accessToken: process.env.ACCESS_TOKEN,
              expires: 1484314697598
            }
          });

        // const transporter = nodemailer.createTransport({
        //     host: process.env.PORT,
        //     service: process.env.SERVICE,
        //     port: 465,
        //     secure: true,
        //     auth: {
        //       type: 'OAuth2',
        //       user: 'jigah4july@gmail.com',
        //       clientId: '436047847806-1g500jutav81d00hs9388dijsoluftsk.apps.googleusercontent.com',
        //       clientSecret: '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',
        //       expires: 1484314697598
        //     }
        //   });

        await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: subject,
            text: text
        })
        console.log('Email send Successful')
    } catch (error) {
        console.log(error, 'email not Sent!')
    }
}

export default sendEmail;