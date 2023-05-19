import { Injectable } from '@nestjs/common';
import { MailDto, MailInputDto } from './dto/mail.dto';
import { UserService } from '../user/user.service';
import { MailProvider } from './provider/mail.provider';
import { MailProviderService } from './mail.provider.service';
import { StatsService } from '../stats/stats.servcie';

@Injectable()
export class MailService{

  provider: MailProvider;

  constructor(private readonly userService: UserService,
              private readonly providerService: MailProviderService,
              private readonly statsService: StatsService) {
    this.provider = providerService.getProvider();
  }

  async send(input: MailInputDto, userId): Promise<MailDto>{
    const user = await this.userService.getUserById(userId);

    const msg = {from: user.email, ...input}

    const wasSent = await this.provider.send(msg)

    //TODO Check with all providers, not just once
    if(!wasSent) {
      this.provider = this.providerService.switchProvider()
      await this.provider.send(msg)
    }

    await this.statsService.updateUserEmailCount(userId)

    return {from: user.email, to: input.to, subject: input.subject, text: input.text}
  }
}