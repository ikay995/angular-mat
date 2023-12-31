import {Component, Input, ContentChild, AfterContentInit, HostBinding, ViewEncapsulation} from '@angular/core';
import { InputRefDirective } from '../../directives/input-ref.directive'; 

@Component({
    selector: 'au-fa-input',
    templateUrl: './au-fa-input.component.html',
    styleUrls: ['./au-fa-input.component.css']
})
export class AuFaInputComponent implements AfterContentInit {

    @Input()
    icon: string;

    @ContentChild(InputRefDirective)
    input: InputRefDirective;

    ngAfterContentInit() {
        if (!this.input) {
            console.error('the au-fa-input needs an input inside its content');
        }
    }

    @HostBinding('class.input-focus')
    get isInputFocus() {
        return this.input ? this.input.focus : false;
    }


    get classes() {

        const cssClasses: any = {};

        if (this.icon) {
            cssClasses['fa-' + this.icon] = true;
        }

        return cssClasses;
    }

}
