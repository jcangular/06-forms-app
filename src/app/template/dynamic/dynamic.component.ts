import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';


interface Game {
    id: number;
    name: string;
}
interface Person {
    name: string;
    games: Game[];
}

@Component({
    selector: 'app-dynamic',
    templateUrl: './dynamic.component.html',
    styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

    @ViewChild('form') form!: NgForm;

    public person: Person = {
        name: 'José Palma',
        games: [
            { id: 1, name: 'Mortal Kombat' },
            { id: 2, name: 'The Last Of Us' }
        ]
    };

    public gameName = '';

    ngOnInit(): void {
    }

    public get nameInvalid(): boolean {
        const name: FormControl = this.form?.controls.name as FormControl;
        return name?.touched && name?.invalid;
    }

    public save(): void {
        console.log('Formulario posteado...!');
    }

    public addGame(): void {
        const id = this.person.games.reduce((a, b) => a.id > b.id ? a : b).id + 1;
        const newGame: Game = {
            id, name: this.gameName
        };
        this.person.games.push({ ...newGame });
        this.gameName = '';
    }

    public removeGame(indice: number): void {
        this.person.games.splice(indice, 1);
    }

}
