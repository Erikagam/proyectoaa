import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdacuraComponent } from './ddacura.component';

describe('DdacuraComponent', () => {
  let component: DdacuraComponent;
  let fixture: ComponentFixture<DdacuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdacuraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DdacuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
