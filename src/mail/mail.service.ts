import { Injectable } from '@nestjs/common';
import { MailDto, MailInputDto } from './dto/mail.dto';
import { UserService } from '../user/user.service';
import { MailProvider } from './provider/mail.provider';
import { SendgridMailProvider } from './provider/sendgrid.mail.provider';
import { MailgunMailProvider } from './provider/mailgun.mail.provider';

@Injectable()
export class MailService{

  providers: MailProvider[];
  using: number

  //TODO use dependency injection to manage Mail Provider
  constructor(private readonly userService: UserService) {
    this.using = 1;
    this.providers = [];
    this.providers.push(new SendgridMailProvider())
    this.providers.push(new MailgunMailProvider())
  }

  async send(input: MailInputDto): Promise<MailDto>{
    const user = await this.userService.getUserById(input.userId);

    const provider = this.providers[this.using];

    const msg = {from: user.email, ...input}

    await provider.send(msg)

    return {from: user.email, to: input.to, subject: input.subject, text: input.text}
  }
}