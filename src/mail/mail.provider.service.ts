import { Injectable } from '@nestjs/common';
import { MailProvider } from './provider/mail.provider';
import { SendgridMailProvider } from './provider/sendgrid.mail.provider';
import { MailgunMailProvider } from './provider/mailgun.mail.provider';
import { MockWorkingMailProvider } from './provider/mock.mail.provider';

@Injectable()
export class MailProviderService{

  private readonly providers: MailProvider[];
  private using: number;

  constructor() {
    this.using = 2
    this.providers = [new SendgridMailProvider(), new MailgunMailProvider(), new MockWorkingMailProvider()]
  }

  switchProvider(): MailProvider{
    this.using++
    if(this.using === this.providers.length){this.using = 0}
    return this.providers[this.using]
  }

  getProvider(): MailProvider{
    return this.providers[this.using];
  }
}