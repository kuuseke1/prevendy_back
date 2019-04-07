import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PselectPage } from './pselect.page';

describe('PselectPage', () => {
  let component: PselectPage;
  let fixture: ComponentFixture<PselectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PselectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PselectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
