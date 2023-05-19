import { StatsController } from './stats.controller';
import { StatsService } from './stats.servcie';
import { StatsRepository } from './stats.repository';
import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [StatsController],
  providers: [StatsService, StatsRepository, PrismaClient],
  exports: [StatsService]

})export class StatsModule{}