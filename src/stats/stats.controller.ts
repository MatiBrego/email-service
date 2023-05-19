import { Controller, Get, UseGuards } from '@nestjs/common';
import { StatsService } from './stats.servcie';
import { AdminAuthGuard } from '../auth/guard/admin.auth.guard';
import { AuthGuard } from '../auth/guard/auth.guard';

@Controller("/stats")
@UseGuards(AuthGuard, AdminAuthGuard)
export class StatsController{
  constructor(private statsService: StatsService) {}

  @Get("")
  async getStatsByUser(){
    return await this.statsService.getEmailCountByUser()
  }
}