/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParkListComponent } from './park-list.component';

describe('ParkListComponent', () => {
  let component: ParkListComponent;
  let fixture: ComponentFixture<ParkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
