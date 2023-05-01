import { MailProvider } from './mail.provider';
import * as SendGrid from '@sendgrid/mail';
import { MailDto } from '../dto/mail.dto';

export class SendgridMailProvider implements MailProvider{

  constructor(){SendGrid.setApiKey(process.env.SENDGRID_API_KEY)}

  //TODO Sendgrid needs to validate sender email to use it.
  async send(input: MailDto): Promise<boolean> {
    try {
      await SendGrid.send(input);
      return true
    }catch (err){
      return false
    }
  }
}