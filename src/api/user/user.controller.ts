import { Controller, Get, Request } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor() {}

  @Get()
  getMe(@Request() req) {
    return req.user;
  }
}
