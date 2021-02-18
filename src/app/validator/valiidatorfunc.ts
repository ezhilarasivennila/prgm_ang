import {AbstractControl} from '@angular/forms';
export function validateFirstName(control: AbstractControl): { [key: string]: boolean } | null {
    if(control.value=="")
    {
        return {'firstname':true};
    }
    return null;
}
export function validateLastName(control: AbstractControl): { [key: string]: boolean } | null {
    if(control.value=="")
    {
        return {'lastname':true};
    }
    return null;
}