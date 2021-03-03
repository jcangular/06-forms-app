import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.css']
})
export class SwitchComponent {

    @ViewChild('form') form!: NgForm;

    person = {
        gender: '',
        notification: true,
        theme: 'light'
    };

    condition = false;

    public submit(): void {
        console.log(this.form.value);
    }

}
