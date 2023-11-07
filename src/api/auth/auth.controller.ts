import { Controller, Post, Body } from '@nestjs/common';
import { Public } from '@/decorators';
import { AuthService } from './auth.service';
import {
  LoginRequestDto,
  LoginResponseDto,
  RegisterRequestDto,
  RegisterResponseDto,
  ActivateRequestDto,
} from './dto';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() loginRequestDto: LoginRequestDto,
  ): Promise<LoginResponseDto> {
    return await this.authService.login(loginRequestDto);
  }

  @Post('register')
  async register(
    @Body() loginRequestDto: RegisterRequestDto,
  ): Promise<RegisterResponseDto> {
    return await this.authService.register(loginRequestDto);
  }

  @Post('activate')
  async activate(@Body() activateRequestDto: ActivateRequestDto) {
    return await this.authService.activate(activateRequestDto);
  }
}
