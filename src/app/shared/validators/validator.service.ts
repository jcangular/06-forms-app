import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class ValidatorService {

    public readonly nameRegExp = '[A-z\u00C0-\u017F]+ [A-z\u00C0-\u017F]+';
    public readonly emailRegExp = '^[a-zA-Z][a-zA-Z0-9_.]+@[a-zA-Z]+(\\.[a-z]{2,3}){1,3}$';

    constructor() { }

    /**
     * Valida que el valor de un control sea distinto a root.
     * @param control es el campo que se desea validar que no sea root.
     * @returns null si el valor es distinto a root.
     */
    public noRootName(control: FormControl): ValidationErrors | null {
        const value: string = control.value?.trim().toLowerCase();
        if (value === 'root') {
            return { canNotBeRoot: true };
        }
        return null;
    }

}
