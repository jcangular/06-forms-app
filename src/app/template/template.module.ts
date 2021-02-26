import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateRoutingModule } from './template-routing.module';

import { BasicComponent } from './basic/basic.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { SwitchComponent } from './switch/switch.component';
import { CustomMinDirective } from './directives/custom-min.directive';


@NgModule({
    declarations: [
        BasicComponent,
        DynamicComponent,
        SwitchComponent,
        CustomMinDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        TemplateRoutingModule
    ]
})
export class TemplateModule { }
