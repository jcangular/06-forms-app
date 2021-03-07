import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

    form: FormGroup = this.fb.group({
        gender: ['M', Validators.required],
        notification: [true, Validators.required],
        theme: ['light', Validators.required],
        condition: [false, Validators.requiredTrue]
    });

    person = {
        gender: 'F',
        notification: true,
        theme: 'light'
    };

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.form.reset({
            ...this.person,
            condition: false
        });

        this.form.valueChanges.subscribe(({ condition, ...value }) => this.person = { ...value });
    }

    public submit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        console.log(this.form);
    }

}
