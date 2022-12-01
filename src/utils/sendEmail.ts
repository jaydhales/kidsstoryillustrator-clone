import nodemailer from 'nodemailer';

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
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
              type: 'OAuth2',
              user: 'jigah4july@gmail.com',
              clientId: '000000000000-xxx0.apps.googleusercontent.com',
              clientSecret: 'XxxxxXXxX0xxxxxxxx0XXxX0',
              refreshToken: '1/XXxXxsss-xxxXXXXXxXxx0XXXxxXXx0x00xxx',
              accessToken: 'ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x',
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