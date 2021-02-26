import { Component } from '@angular/core';

interface MenuItem {
    label: string;
    path: string;
}

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

    templateMenu: MenuItem[] = [
        { label: 'Básicos', path: 'template/basic' },
        { label: 'Dinámicos', path: 'template/dynamic' },
        { label: 'Switches', path: 'template/switch' },
    ];

    reactiveMenu: MenuItem[] = [
        { label: 'Básicos', path: 'reactive/basic' },
        { label: 'Dinámicos', path: 'reactive/dynamic' },
        { label: 'Switches', path: 'reactive/switch' },
    ];

}
