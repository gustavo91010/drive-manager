import { IsNotEmpty, IsNumber, MinLength } from "class-validator";

export class DailyDto{


    @MinLength(4) // dia mes  com 2 digitos cada
    @IsNotEmpty({ message: 'O campo date não pode ser vazio'})
    date: Date;

    @IsNumber()
    @IsNotEmpty({ message: 'O campo km_walkend não pode ser vazio'})
    km_walkend: number;

    @IsNumber()
    @IsNotEmpty({ message: 'O campo sepen_amount não pode ser vazio'})
    sepen_amount: number // valor gasto

    @IsNumber()
    @IsNotEmpty({ message: 'O campo gross_amount não pode ser vazio'})
    gross_amount: number; // valor bruto

}