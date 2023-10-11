import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function OnlyLowerLettersValidator(control: AbstractControl): ValidationErrors 
{
    const value: string = control.value;

    return value !== value.toLowerCase() ? { onlyLowerLetters: true } : null;
}

export function LowerCaseCountValidator(count: number): ValidatorFn
{
    return (control: AbstractControl) : ValidationErrors | null => {
        let value : string = control.value;
        let state : boolean = false;

        for (let i = 0; i < count; i++) 
        {
            if(value != "" && value[i] != value[i]?.toLowerCase()){
                state = true;
            }
        }

        return state ? { LowerCaseCount: true } : null;
    }
}

export function DateTimeValidator() : ValidatorFn
{
    return(control: AbstractControl) : ValidationErrors | null => {
        const startDate : Date = control.get("startDate").value;
        const endDate: Date = control.get("endDate").value;

        return (startDate >= endDate) ? { DateTimeValidator: true } : null;
    }
}
