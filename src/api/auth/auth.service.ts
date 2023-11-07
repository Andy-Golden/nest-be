import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginRequestDto } from './dto/login-request.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginResponseDto } from './dto/login-response.dto';
import { RegisterRequestDto } from './dto/register-request.dto';
import { RegisterResponseDto } from './dto/register-response.dto';
import { ActivateRequestDto } from './dto/activate-request.dto';
import { VerifyPayload } from '@/interfaces';
import { User } from '@/utils/constants';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(loginRequestDto: LoginRequestDto): Promise<LoginResponseDto> {
    if (
      loginRequestDto.email !== User.user.email ||
      loginRequestDto.password !== User.user.password
    ) {
      throw new UnauthorizedException();
    }

    const accessToken = this.jwtService.sign({ id: 1, email: User.user.email });

    return {
      email: loginRequestDto.email,
      accessToken,
    };
  }

  async register(
    registerRequestDto: RegisterRequestDto,
  ): Promise<RegisterResponseDto> {
    if (
      registerRequestDto.password !== registerRequestDto.passwordConfirmation
    ) {
      throw new BadRequestException();
    }

    if (registerRequestDto.email === User.user.email) {
      throw new BadRequestException();
    }

    const signupUser = {
      email: registerRequestDto.email,
      fullname: registerRequestDto.fullname,
    };

    const verifyToken = this.jwtService.sign(signupUser);

    return {
      email: registerRequestDto.email,
      fullname: registerRequestDto.fullname,
      verifyToken,
    };
  }

  async activate(activateRequestDto: ActivateRequestDto) {
    const payload: VerifyPayload = this.jwtService.verify(
      activateRequestDto.verifyToken,
    );

    if (payload.email === User.activateUser.email) {
      throw new BadRequestException();
    }

    return {
      success: true,
    };
  }
}
