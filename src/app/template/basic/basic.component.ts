import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-basic',
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

    @ViewChild('productForm') form!: NgForm;

    initialValues = {
        product: '',
        price: 0,
        stock: 0
    };

    constructor() { }

    ngOnInit(): void { }

    public isProductInvalid(): boolean {
        return this.form?.controls.product?.invalid && this.form?.controls.product?.touched;
    }

    public isPriceInvalid(): boolean {
        return this.form?.controls.price?.touched && this.form?.controls.price?.value < 0;
    }

    save(): void {
        console.log(this.form);
        this.form.resetForm(this.initialValues);
    }

}
