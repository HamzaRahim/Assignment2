import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMoviePage } from './display-movie.page';

describe('DisplayMoviePage', () => {
  let component: DisplayMoviePage;
  let fixture: ComponentFixture<DisplayMoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMoviePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
