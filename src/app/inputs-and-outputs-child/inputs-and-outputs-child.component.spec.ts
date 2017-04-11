import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsAndOutputsChildComponent } from './inputs-and-outputs-child.component';

describe('InputsAndOutputsChildComponent', () => {
  let component: InputsAndOutputsChildComponent;
  let fixture: ComponentFixture<InputsAndOutputsChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputsAndOutputsChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsAndOutputsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
