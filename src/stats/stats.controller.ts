import { Controller, Get, UseGuards } from '@nestjs/common';
import { StatsService } from './stats.servcie';
import { AdminAuthGuard } from '../auth/guard/admin.auth.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller("/stats")
@UseGuards(AuthGuard('jwt'), AdminAuthGuard)
export class StatsController{
  constructor(private statsService: StatsService) {}

  @Get("")
  async getStatsByUser(){
    return await this.statsService.getEmailCountByUser()
  }
}