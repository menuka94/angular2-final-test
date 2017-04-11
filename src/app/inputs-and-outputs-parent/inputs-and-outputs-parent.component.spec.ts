import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsAndOutputsParentComponent } from './inputs-and-outputs-parent.component';

describe('InputsAndOutputsParentComponent', () => {
  let component: InputsAndOutputsParentComponent;
  let fixture: ComponentFixture<InputsAndOutputsParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputsAndOutputsParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsAndOutputsParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
