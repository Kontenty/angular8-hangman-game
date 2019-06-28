import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanImgComponent } from './hangman-img.component';

describe('HangmanImgComponent', () => {
  let component: HangmanImgComponent;
  let fixture: ComponentFixture<HangmanImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangmanImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangmanImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
