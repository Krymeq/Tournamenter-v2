import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService){}
    
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest();
        return this.authService.verify(req.cookies.token);
    }
}