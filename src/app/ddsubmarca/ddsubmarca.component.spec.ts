import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdsubmarcaComponent } from './ddsubmarca.component';

describe('DdsubmarcaComponent', () => {
  let component: DdsubmarcaComponent;
  let fixture: ComponentFixture<DdsubmarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdsubmarcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DdsubmarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
