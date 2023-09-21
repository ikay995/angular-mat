import { AfterContentInit, Component, ContentChild, HostBinding, Input } from '@angular/core';
import { InputRefDirectives } from '../common/input-ref.directive';

@Component({
  selector: 'ikay-fa-input',
  templateUrl: './ikay-fa-input.component.html',
  styleUrls: ['./ikay-fa-input.component.css']
})
export class IkayFaInputComponent implements AfterContentInit {
@Input() icon: string;
@ContentChild(InputRefDirectives) input: InputRefDirectives

ngAfterContentInit(): void {
  console.log(this.input)
}

@HostBinding('class.input-focus')
    get isInputFocus() {
        return this.input ? this.input.focus : false;
    }

get classes() {
  let cssClasses: any = {
    'fa': true
  }
  if (this.icon) {
    cssClasses['fa-' + this.icon] = true
  }
  return cssClasses
}
}
