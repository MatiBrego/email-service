import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { MailDto, MailInputDto } from './dto/mail.dto';
import { MailService } from './mail.service';
import { GetUserId } from '../auth/decorator/get.user.decorator';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller("/mail")
export class MailController{

  constructor(private readonly mailService: MailService) {
  }

  @Get("/test")
  getTestFunction(@GetUserId() userId){
    console.log(userId)
  }

  @Post("/")
  sendMail(@Body() input: MailInputDto, @GetUserId() userId): Promise<MailDto>{
    return this.mailService.send(input, userId);
  }
}
