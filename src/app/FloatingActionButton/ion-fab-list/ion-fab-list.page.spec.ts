import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonFabListPage } from './ion-fab-list.page';

describe('IonFabListPage', () => {
  let component: IonFabListPage;
  let fixture: ComponentFixture<IonFabListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonFabListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonFabListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
