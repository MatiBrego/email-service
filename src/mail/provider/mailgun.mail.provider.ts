import * as mailgun from 'mailgun-js';
import { MailProvider } from './mail.provider';
import { MailDto } from '../dto/mail.dto';
import { Mailgun } from 'mailgun-js';
import { Injectable } from '@nestjs/common';

Injectable()
export class MailgunMailProvider implements MailProvider{
  mg: Mailgun;

  constructor() {
    this.mg = new mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN})
  }

  //TODO Recipients must be validated in mailgun first
  async send(input: MailDto): Promise<boolean> {
    try {
      await this.mg.messages().send(input)
      return true
    }catch (err){
      console.log(err)
      console.log("Mailgun failed")
      return false
    }
  }
}