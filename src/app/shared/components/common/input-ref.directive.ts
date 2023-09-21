import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'ikay-fa-input input'
})
export class InputRefDirectives {

  focus = false;

    @HostListener('focus')
    onFocus() {
        this.focus = true;
    }

    @HostListener('blur')
    onBlur() {
        this.focus = false;
    }

}
