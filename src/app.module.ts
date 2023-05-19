import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { StatsModule } from './stats/stats.module';

@Module({
  imports: [AuthModule, MailModule, StatsModule],
})
export class AppModule {}
