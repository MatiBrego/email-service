import {Module} from "@nestjs/common";
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";
import {UserModule} from "../user/user.module";
import {JwtModule} from "@nestjs/jwt";
import { AuthGuard } from './auth.guard';

@Module({
    controllers:[AuthController],
    providers:[AuthService, AuthGuard],
    exports:[AuthModule],
    imports:[UserModule, JwtModule.register({secret: process.env.TOKEN_SECRET, signOptions: {expiresIn: "1h"}})]
}) export class AuthModule{}