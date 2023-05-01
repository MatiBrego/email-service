import { MailProvider } from './mail.provider';
import { MailDto } from '../dto/mail.dto';
import * as nodemailer from 'nodemailer';

export class NodemailerMailProvider implements MailProvider{

  transporter: nodemailer.Transporter;

  //TODO This provider does not work
  async send(input: MailDto): Promise<boolean> {
    await this.createTransport();
    await this.transporter.sendMail(input)
    return false
  }

  async createTransport(){
    const testAccount = await nodemailer.createTestAccount();

    this.transporter = await nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });

  }
}