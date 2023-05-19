import { CanActivate, ExecutionContext, HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {
  }

  async canActivate(context: ExecutionContext): Promise<boolean>{
    //Get Header
    const authorization = context.switchToHttp().getRequest().headers.authorization;

    //Separate "Bearer" from token
    const [bearer, token] = authorization?.split(" ") || [];

    //Check authorization format
    if(!bearer || !token || bearer !== "Bearer") throw new HttpException("Authorization header missing", 400);

    //Verify token
    try{ this.jwtService.verify(token) } catch (err){
      throw new HttpException("Invalid Token", 401)
    }

    //Add userId to the body TODO Is this correct, or is there a better way?
    context.switchToHttp().getRequest().userId = this.jwtService.decode(token)["userId"]

    return true
  }
}