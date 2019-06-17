import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaisabertosPage } from './editaisabertos.page';

describe('EditaisabertosPage', () => {
  let component: EditaisabertosPage;
  let fixture: ComponentFixture<EditaisabertosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaisabertosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaisabertosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
