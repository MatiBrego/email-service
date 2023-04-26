import {Body, Controller, Post} from "@nestjs/common";
import {SignInInput, SignUpInput} from "./dto/auth.dto";
import {AuthService} from "./auth.service";

@Controller("/auth")
export class AuthController {

    constructor(private readonly authService: AuthService) {
    }

    @Post("/signup")
    async signUp(@Body() input: SignUpInput): Promise<{token: string}>{
        return {token: await this.authService.signUp(input)};
    }

    @Post("/signin")
    async signIn(@Body() input: SignInInput): Promise<{token: string}>{
        return {token: await this.authService.signIn(input)}
    }
}