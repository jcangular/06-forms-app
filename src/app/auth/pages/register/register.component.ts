import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '@shared/validators/validator.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


    form: FormGroup = this.fb.group({
        name: ['', [Validators.required, Validators.pattern(this.vs.nameRegExp)]],
        email: ['', [Validators.required, Validators.pattern(this.vs.emailRegExp)]],
        username: ['', [Validators.required, this.vs.noRootName]]
    });

    constructor(
        private fb: FormBuilder,
        private vs: ValidatorService
    ) { }

    ngOnInit(): void {
        this.form.reset({
            name: 'José Palma',
            email: 'test1@correo.com',
            username: 'jcpalma'
        });
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
