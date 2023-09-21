import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IkayFaInputComponent } from './ikay-fa-input.component';

describe('IkayFaInputComponent', () => {
  let component: IkayFaInputComponent;
  let fixture: ComponentFixture<IkayFaInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IkayFaInputComponent]
    });
    fixture = TestBed.createComponent(IkayFaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
