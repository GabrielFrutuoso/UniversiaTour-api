import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService, 
    private readonly jwtService: JwtService
    ) {} 

  login(user) {
    const payload = { 
      email: user.email, 
      sub: user.id, 
      username: user.username 
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string) {
      const user = await this.userService.findByEmail(email);

      if (user) {
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
          return {
            ...user,
            password: undefined,
          };
        }
        throw new Error('Email adress or password is incorrect');
      }
  }
  
}
