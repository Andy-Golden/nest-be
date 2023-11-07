import { IsNotEmpty, IsString } from 'class-validator';

export class ActivateRequestDto {
  @IsNotEmpty()
  @IsString()
  verifyToken: string;
}
