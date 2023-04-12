import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingTechComponent } from './pricing-tech.component';

describe('PricingTechComponent', () => {
  let component: PricingTechComponent;
  let fixture: ComponentFixture<PricingTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
