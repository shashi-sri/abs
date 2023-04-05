import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringExcellenceComponent } from './engineering-excellence.component';

describe('EngineeringExcellenceComponent', () => {
  let component: EngineeringExcellenceComponent;
  let fixture: ComponentFixture<EngineeringExcellenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineeringExcellenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineeringExcellenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
