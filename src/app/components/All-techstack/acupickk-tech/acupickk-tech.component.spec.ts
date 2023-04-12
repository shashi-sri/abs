import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcupickkTechComponent } from './acupickk-tech.component';

describe('AcupickkTechComponent', () => {
  let component: AcupickkTechComponent;
  let fixture: ComponentFixture<AcupickkTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcupickkTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcupickkTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
