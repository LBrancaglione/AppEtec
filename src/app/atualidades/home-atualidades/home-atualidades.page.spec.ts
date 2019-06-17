import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAtualidadesPage } from './home-atualidades.page';

describe('HomeAtualidadesPage', () => {
  let component: HomeAtualidadesPage;
  let fixture: ComponentFixture<HomeAtualidadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAtualidadesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAtualidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
