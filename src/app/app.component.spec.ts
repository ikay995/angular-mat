import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { IkayFaInputComponent } from './shared/components/ikay-fa-input/ikay-fa-input.component';
import { InputRefDirectives } from './shared/components/common/input-ref.directive';
import { AuMdInputComponent } from './shared/components/au-md-input/au-md-input.component';
import { AuFaInputComponent } from './shared/components/au-fa-input/au-fa-input.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent,
  fixture: ComponentFixture<AppComponent>,
  el: DebugElement


  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent, IkayFaInputComponent, InputRefDirectives, AuMdInputComponent, AuFaInputComponent]
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    el = fixture.debugElement
    fixture.detectChanges()
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'angular-advanced1'`, () => {
    expect(component.title).toEqual('angular-advanced1');
  });

  it(`should create a font awesome email input`, () => {
    const emailField = el.query(By.css('#input'))
    console.log(emailField.nativeElement.outerHTML)
    expect(emailField).toBeTruthy();
    expect(emailField.query(By.css("i.icon.fa.fa-envelope"))).toBeTruthy();
    expect(emailField.query(By.css("input.test-class"))).toBeTruthy();
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('angular-advanced1 app is running!');
  // });
});
