import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia01Page } from './noticia01.page';

describe('Noticia01Page', () => {
  let component: Noticia01Page;
  let fixture: ComponentFixture<Noticia01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia01Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
