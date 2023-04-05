import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcupickComponent } from './acupick.component';

describe('AcupickComponent', () => {
  let component: AcupickComponent;
  let fixture: ComponentFixture<AcupickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcupickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcupickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
