import {Module} from "@nestjs/common";
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";
import {UserModule} from "../user/user.module";
import {JwtModule} from "@nestjs/jwt";
import { AuthGuard } from './guard/auth.guard';
import { AdminAuthGuard } from './guard/admin.auth.guard';

@Module({
    controllers:[AuthController],
    providers:[AuthService, AuthGuard, AdminAuthGuard],
    imports:[UserModule, JwtModule.register({secret: process.env.TOKEN_SECRET, signOptions: {expiresIn: "1h"}})],
    exports:[AuthModule]
}) export class AuthModule{}