import {Module} from "@nestjs/common";
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";
import {UserModule} from "../user/user.module";
import { AdminAuthGuard } from './guard/admin.auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
    controllers:[AuthController],
    providers:[AuthService, AdminAuthGuard, JwtStrategy],
    imports:[UserModule, JwtModule.register({secret: process.env.TOKEN_SECRET, signOptions: {expiresIn: "1h"}})],
    exports:[AuthModule]
}) export class AuthModule{}