import { StatsController } from './stats.controller';
import { StatsService } from './stats.servcie';
import { StatsRepository } from './stats.repository';
import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [StatsController],
  providers: [StatsService, StatsRepository, PrismaClient, ],
  imports: [AuthModule, UserModule, JwtModule.register({secret: process.env.TOKEN_SECRET, signOptions: {expiresIn: "1h"}})],
  exports: [StatsService]

})export class StatsModule{}