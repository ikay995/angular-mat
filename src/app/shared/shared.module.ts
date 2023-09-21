

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputRefDirectives } from './components/common/input-ref.directive';
import { AuMdInputComponent } from './components/au-md-input/au-md-input.component';
import { AuFaInputComponent } from './components/au-fa-input/au-fa-input.component';
import { IkayFaInputComponent } from './components/ikay-fa-input/ikay-fa-input.component';
import { InputRefDirective } from './directives/input-ref.directive';

@NgModule({
    declarations: [InputRefDirectives, AuFaInputComponent, AuMdInputComponent, IkayFaInputComponent, InputRefDirective],
    imports: [
        CommonModule
    ],
    exports: [IkayFaInputComponent, AuMdInputComponent, AuFaInputComponent, InputRefDirectives, InputRefDirective]
})
export class SharedModule { }

