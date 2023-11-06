import { IsEmail, IsString, Matches } from 'class-validator';
export class LoginRequestDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;
}
