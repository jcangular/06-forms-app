import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    form: FormGroup = this.fb.group({
        name: ['', [Validators.required, Validators.pattern('[A-z\u00C0-\u017F]+ [A-z\u00C0-\u017F]+')]]
    });

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
    }

    public isInvalid(fieldName: string): boolean {
        const field = this.form.get(fieldName) as FormControl;
        return field?.touched && field?.invalid;
    }

    public register(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        console.log(this.form);
    }

}
