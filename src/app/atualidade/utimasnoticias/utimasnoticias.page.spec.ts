import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtimasnoticiasPage } from './utimasnoticias.page';

describe('UtimasnoticiasPage', () => {
  let component: UtimasnoticiasPage;
  let fixture: ComponentFixture<UtimasnoticiasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtimasnoticiasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtimasnoticiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
