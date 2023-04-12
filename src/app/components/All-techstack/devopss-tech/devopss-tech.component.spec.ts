import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopssTechComponent } from './devopss-tech.component';

describe('DevopssTechComponent', () => {
  let component: DevopssTechComponent;
  let fixture: ComponentFixture<DevopssTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevopssTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevopssTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
