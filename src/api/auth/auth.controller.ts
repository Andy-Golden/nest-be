import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequestDto } from './dto/login-request.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { Public } from '../../decorators/public.decorator';
import { RegisterRequestDto } from './dto/register-request.dto';
import { RegisterResponseDto } from './dto/register-response.dto';
import { ActivateRequestDto } from './dto/activate-request.dto';

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
