import { Controller, Get, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private configService: ConfigService,
  ) {}

  @Get()
  getMe(@Request() req) {
    console.log(this.configService.get('token'));
    return req.user;
  }
}
