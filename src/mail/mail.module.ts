import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { AuthModule } from '../auth/auth.module';
import { MailService } from './mail.service';
import { UserModule } from '../user/user.module';
import { MailProviderService } from './mail.provider.service';
import { StatsModule } from '../stats/stats.module';

@Module({
  imports: [AuthModule, UserModule, StatsModule],
  controllers: [MailController],
  providers: [MailService, MailProviderService],
  exports: [MailModule]
}) export class MailModule{}