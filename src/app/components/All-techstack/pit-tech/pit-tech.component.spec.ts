import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PitTechComponent } from './pit-tech.component';

describe('PitTechComponent', () => {
  let component: PitTechComponent;
  let fixture: ComponentFixture<PitTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PitTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PitTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
