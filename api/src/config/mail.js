import nodemailer from 'nodemailer'

const mail = {
  user: process.env.MAIL_USER,
  password: process.env.MAIL_PASS
}


// create reusable transporter object using the default SMTP transport
export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: mail.user, // generated ethereal user
    pass: mail.password, // generated ethereal password
  },
});


// transporter.verify().then(() => {
//   console.log('Ready to send emails');
// })

