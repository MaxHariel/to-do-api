import { Injectable, NotFoundException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'identification' });
  }

  async validate(identification: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(identification, password);
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
}
