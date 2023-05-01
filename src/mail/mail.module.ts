import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { AuthModule } from '../auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { MailService } from './mail.service';
import { UserModule } from '../user/user.module';
import { MailProviderService } from './mail.provider.service';

@Module({
  //TODO Why do I need to import JwtModule here?

  imports: [AuthModule, UserModule,JwtModule.register({secret: process.env.TOKEN_SECRET, signOptions: {expiresIn: "1h"}})],
  controllers: [MailController],
  providers: [MailService, MailProviderService],
  exports: [MailModule]
}) export class MailModule{}