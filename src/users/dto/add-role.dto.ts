import { IsNumber, IsString } from 'class-validator';
export class AddRoleDto {
  @IsString()
  readonly value: string;
  @IsNumber({}, { message: '' })
  readonly userId: number;
}
