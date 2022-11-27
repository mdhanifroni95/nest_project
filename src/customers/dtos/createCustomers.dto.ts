import { IsNumberString, IsNotEmpty, Length, IsEmail } from 'class-validator';

export class CreateCustomerDto {
  @IsNumberString()
  id: number;

  @IsNotEmpty()
  @Length(10, 20)
  name: string;

  @IsEmail()
  email: string;
}
