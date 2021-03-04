import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-basic',
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {


    // form: FormGroup = new FormGroup({
    //     name: new FormControl('Macbook Pro 13"'),
    //     price: new FormControl(0),
    //     stock: new FormControl(0)
    // });

    form: FormGroup = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        price: [, [Validators.required, Validators.min(0)]],
        stock: [, [Validators.required, Validators.min(0)]]
    });

    public get nameInvalid(): boolean {
        return this.form.controls.name.touched && this.form.controls.name.invalid;
    }

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {

        // Se deben inicializar todos los campos.
        // this.form.setValue({
        //     name: 'Macbook Pro 13',
        //     price: 0,
        //     stock: 0
        // });

        this.form.reset({
            name: 'Macbook Pro 13'
        });
    }

    /**
     * Verifica si un campo es invalido.
     * @param field es el nombre del campo del formulario.
     */
    public isInvalid(field: string): boolean {
        return this.form.controls[field].touched && this.form.controls[field].invalid;
    }

    public save(): void {

        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        console.log(this.form.value);

        // Limpia el formulario.
        this.form.reset();

    }
}
