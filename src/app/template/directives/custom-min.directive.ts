import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validators } from '@angular/forms';

@Directive({
    selector: '[appCustomMin][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})
export class CustomMinDirective extends Validators {
    @Input() minimo!: number;

    validate(control: FormControl): { customMin?: boolean; } {
        const value = control.value;
        return value < this.minimo ? { customMin: true } : {};
    }
}
