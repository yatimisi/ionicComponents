import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonInfiniteScrollPage } from './ion-infinite-scroll.page';

describe('IonInfiniteScrollPage', () => {
  let component: IonInfiniteScrollPage;
  let fixture: ComponentFixture<IonInfiniteScrollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonInfiniteScrollPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonInfiniteScrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
