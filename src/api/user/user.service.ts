import { Injectable } from '@nestjs/common';
import { ProfileResponseDto } from './dto';

@Injectable()
export class UserService {
  async getMe(): Promise<ProfileResponseDto> {
    const profile: ProfileResponseDto = {
      name: 'John Doe',
      email: 'test@gmail.com',
      role: 'user',
    };

    return profile;
  }
}
