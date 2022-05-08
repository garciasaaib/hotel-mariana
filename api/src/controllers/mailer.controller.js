import { transporter } from '../config/mail'
import { User, Client } from '../models/index'
import tokenUtil from '../utils/token.utils'
import authConfig from '../config/auth'
import boom from '@hapi/boom'
import modelToInput from '../utils/modelToInput.utils'
import clientController from './client.controller'
import {verifyMail as verifyEmailTemplate} from '../../templates/mailer/verifyEmail'

module.exports = {


  async verifyEmail(body) {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Hotel Mariana 🏨" <${process.env.MAIL_USER}>`, // sender address
      to: `${body.email}`, // list of receivers
      subject: "Hotel Mariana 🏨: verify your password", // Subject line
      text: "Hello world?", // plain text body
      html: verifyEmailTemplate('www.google.com'), // html body
    });
  },


}

