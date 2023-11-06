import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginRequestDto } from './dto/login-request.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { LoginResponseDto } from './dto/login-response.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async login(loginRequestDto: LoginRequestDto): Promise<LoginResponseDto> {
    if (
      loginRequestDto.email === 'andy.nguyen.goldenowl@gmail.com' &&
      loginRequestDto.password === '1'
    ) {
      const accessToken = this.jwtService.sign({
        email: 'andy.nguyen.goldenowl@gmail.com',
        password: '1',
      });

      return {
        email: 'andy.nguyen.goldenowl@gmail.com',
        password: '1',
        accessToken,
      };
    }

    throw new BadRequestException();
  }
}
