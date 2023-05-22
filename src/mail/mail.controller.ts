import { Body, Controller, InternalServerErrorException, Post, UseGuards } from '@nestjs/common';
import { MailDto, MailInputDto } from './dto/mail.dto';
import { MailService } from './mail.service';
import { GetUserId } from '../auth/decorator/get.user.decorator';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller("/mail")
export class MailController{

  constructor(private readonly mailService: MailService) {
  }

  @Post("/")
  async sendMail(@Body() input: MailInputDto, @GetUserId() userId): Promise<MailDto>{
    const sentMail = await this.mailService.send(input, userId);

    if(sentMail) return sentMail;

    throw new InternalServerErrorException('Email Service is not working at the moment');
  }
}
