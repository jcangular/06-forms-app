import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-dynamic',
    templateUrl: './dynamic.component.html',
    styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent {

    form: FormGroup = this.fb.group({
        name: ['José Palma', [Validators.required, Validators.minLength(3)]],
        games: this.fb.array([
            ['Mortal Kombat', Validators.required],
            ['The Last Of Us', Validators.required]
        ], Validators.required)
    });

    newGame: FormControl = this.fb.control('', Validators.required);

    public get games(): FormArray {
        return this.form.get('games') as FormArray;
    }

    constructor(private fb: FormBuilder) { }

    public isInvalid(field: string): boolean {
        const f = this.form.controls[field] as FormControl;
        return f.touched && f.invalid;
    }

    public addGame(): void {
        if (this.newGame.invalid) {
            return;
        }
        // this.favorites.push(new FormControl(this.newGame.value, Validators.required));
        this.games.push(this.fb.control(this.newGame.value, Validators.required));
        this.newGame.reset();
    }

    public removeGame(index: number): void {
        this.games.removeAt(index);
    }

    public submit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        console.log(this.form.value);
    }

}
