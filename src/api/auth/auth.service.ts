import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginRequestDto } from './dto/login-request.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginResponseDto } from './dto/login-response.dto';

const user = {
  email: 'test@gmail.com',
  password: 'Hello@1',
};

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(loginRequestDto: LoginRequestDto): Promise<LoginResponseDto> {
    if (
      loginRequestDto.email !== user.email ||
      loginRequestDto.password !== user.password
    ) {
      throw new UnauthorizedException();
    }

    const accessToken = this.jwtService.sign({ id: 1, email: user.email });

    return {
      email: loginRequestDto.email,
      accessToken,
    };
  }
}
