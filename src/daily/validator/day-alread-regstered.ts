import { Injectable } from "@nestjs/common";
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { DailySerice } from "../service/daily-services";

@Injectable()
@ValidatorConstraint({async: true})
export class DayAlreadRegistered implements ValidatorConstraintInterface{
    constructor(private  dailyService: DailySerice ){}
    
    validate(value: any,
         validationArguments?: ValidationArguments): Promise<boolean> {
      
      
            return null;
    }
   

}