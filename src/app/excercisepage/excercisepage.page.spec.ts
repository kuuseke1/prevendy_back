import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcercisepagePage } from './excercisepage.page';

describe('ExcercisepagePage', () => {
  let component: ExcercisepagePage;
  let fixture: ComponentFixture<ExcercisepagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcercisepagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcercisepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
