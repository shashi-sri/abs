import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyyTechComponent } from './pharmacyy-tech.component';

describe('PharmacyyTechComponent', () => {
  let component: PharmacyyTechComponent;
  let fixture: ComponentFixture<PharmacyyTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyyTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyyTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
