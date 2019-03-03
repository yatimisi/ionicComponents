import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionSheetExamplePage } from './action-sheet-example.page';

describe('ActionSheetExamplePage', () => {
  let component: ActionSheetExamplePage;
  let fixture: ComponentFixture<ActionSheetExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionSheetExamplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionSheetExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
