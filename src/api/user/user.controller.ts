import { Controller, Get, Request } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor() {}

  @Get('me')
  getMe(@Request() req) {
    return req.user;
  }
}
