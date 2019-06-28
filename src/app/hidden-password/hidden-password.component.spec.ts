import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenPasswordComponent } from './hidden-password.component';

describe('HiddenPasswordComponent', () => {
  let component: HiddenPasswordComponent;
  let fixture: ComponentFixture<HiddenPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiddenPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddenPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
