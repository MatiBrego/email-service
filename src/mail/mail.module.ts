import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { AuthModule } from '../auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  //TODO Why do I need to import JwtModule here?

  imports: [AuthModule, JwtModule.register({secret: process.env.TOKEN_SECRET, signOptions: {expiresIn: "1h"}})],
  controllers: [MailController],
  exports: [MailModule]
}) export class MailModule{}