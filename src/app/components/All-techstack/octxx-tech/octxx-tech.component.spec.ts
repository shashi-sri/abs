import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctxxTechComponent } from './octxx-tech.component';

describe('OctxxTechComponent', () => {
  let component: OctxxTechComponent;
  let fixture: ComponentFixture<OctxxTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OctxxTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OctxxTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
