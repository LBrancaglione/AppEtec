import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacoesinternacionaisHomePage } from './relacoesinternacionais-home.page';

describe('RelacoesinternacionaisHomePage', () => {
  let component: RelacoesinternacionaisHomePage;
  let fixture: ComponentFixture<RelacoesinternacionaisHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelacoesinternacionaisHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelacoesinternacionaisHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
