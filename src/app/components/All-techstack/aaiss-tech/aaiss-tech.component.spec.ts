import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaissTechComponent } from './aaiss-tech.component';

describe('AaissTechComponent', () => {
  let component: AaissTechComponent;
  let fixture: ComponentFixture<AaissTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaissTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AaissTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
