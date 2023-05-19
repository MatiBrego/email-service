import { Controller, Get } from '@nestjs/common';
import { StatsService } from './stats.servcie';

@Controller("/stats")
export class StatsController{
  constructor(private statsService: StatsService) {}

  //TODO remove test endpoint
  @Get("/testUpdate")
  async getStats(){
    await this.statsService.updateUserEmailCount(4)
  }

  @Get("")
  async getStatsByUser(){
    return await this.statsService.getEmailCountByUser()
  }
}