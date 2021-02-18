import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    async sign(data: any) {
        return this.jwtService.sign(data);
    }

    async verify(token: string) {
        if(token) {
            return this.jwtService.verify(token);
        } else {
            return false;
        }
    }

    async decode(token: string) {
        return this.jwtService.decode(token);
    }
}