import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller("/mail")
export class MailController{

  @Get("/test")
  getTestFunction(@Body() input: {userId: string}){
    console.log(input)
    return input.userId;
  }
}
