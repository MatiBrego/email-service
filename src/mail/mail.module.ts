import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { AuthModule } from '../auth/auth.module';
import { MailService } from './mail.service';
import { UserModule } from '../user/user.module';
import { MailProviderService } from './mail.provider.service';
import { StatsModule } from '../stats/stats.module';
import { MailgunMailProvider } from './provider/mailgun.mail.provider';
import { SendgridMailProvider } from './provider/sendgrid.mail.provider';
import { MockNotWorkingMailProvider, MockWorkingMailProvider } from '../../test/unit/mail/util/mock.mail.provider';

const mailProviderService = new MailProviderService(
  [new MailgunMailProvider(), new SendgridMailProvider()]
)

const testMailProviderService = new MailProviderService(
  [new MockNotWorkingMailProvider(), new MockWorkingMailProvider()]
)

@Module({
  imports: [AuthModule, UserModule, StatsModule],
  controllers: [MailController],
  providers: [MailService, {provide: MailProviderService, useValue: testMailProviderService}],
  exports: [MailModule]
}) export class MailModule{}