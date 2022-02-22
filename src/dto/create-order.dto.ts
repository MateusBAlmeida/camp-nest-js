import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateOrderDto {
    @IsString()
    @IsNotEmpty()
    client: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsNumber()
    @IsNotEmpty()
    orderPrice: number;
}