import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { MailInputDto } from './dto/mail.dto';
import { MailService } from './mail.service';

@UseGuards(AuthGuard)
@Controller("/mail")
export class MailController{

  constructor(private readonly mailService: MailService) {
  }

  @Get("/test")
  getTestFunction(@Body() input: {userId: string}){
    console.log(input)
    return input.userId;
  }

  @Post("/")
  sendMail(@Body() input: MailInputDto){
    return this.mailService.send(input);
  }
}
