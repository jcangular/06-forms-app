import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    private readonly nameRegExp = '[A-z\u00C0-\u017F]+ [A-z\u00C0-\u017F]+';
    private readonly emailRegExp = '^[a-zA-Z][a-zA-Z0-9_.]+@[a-zA-Z]+(\\.[a-z]{2,3}){1,3}$';

    form: FormGroup = this.fb.group({
        name: ['', [Validators.required, Validators.pattern(this.nameRegExp)]],
        email: ['', [Validators.required, Validators.pattern(this.emailRegExp)]],
        username: ['', [Validators.required, this.noRootName]]
    });

    constructor(private fb: FormBuilder) { }

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

    public noRootName(control: FormControl): { canNotBeRoot: boolean; } | null {
        const value: string = control.value?.trim().toLowerCase();
        if (value === 'root') {
            return { canNotBeRoot: true };
        }
        return null;
    }

}
