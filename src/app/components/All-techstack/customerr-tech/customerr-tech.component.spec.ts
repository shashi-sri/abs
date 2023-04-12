import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerrTechComponent } from './customerr-tech.component';

describe('CustomerrTechComponent', () => {
  let component: CustomerrTechComponent;
  let fixture: ComponentFixture<CustomerrTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerrTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerrTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
