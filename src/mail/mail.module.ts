import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { AuthModule } from '../auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { MailService } from './mail.service';
import { UserModule } from '../user/user.module';

@Module({
  //TODO Why do I need to import JwtModule here?

  imports: [AuthModule, UserModule,JwtModule.register({secret: process.env.TOKEN_SECRET, signOptions: {expiresIn: "1h"}})],
  controllers: [MailController],
  providers: [MailService],
  exports: [MailModule]
}) export class MailModule{}