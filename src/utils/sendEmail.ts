import nodemailer from 'nodemailer';
import { google } from 'googleapis';
const OAuth2 = google.auth.OAuth2;


const client_id = process.env.CLIENT_ID as string;
const client_secret = process.env.CLIENT_SECRET as string;
const refresh_token = process.env.REFRESH_TOKEN as string;
const authUser = process.env.USER as string;

const OAuth2_client = new OAuth2(client_id, client_secret);
OAuth2_client.setCredentials({ refresh_token});

const sendEmail = async(email: any, subject: any, text: any) => {
    try {
        const accessToken = OAuth2_client.getAccessToken()


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: authUser,
        clientId: client_id,
        clientSecret: client_secret,
        refreshToken: refresh_token,
        accessToken: accessToken,
    expires: 1484314697598
  }
});


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