import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RSVIPod1Component } from './rsvi-pod1.component';

describe('RSVIPod1Component', () => {
  let component: RSVIPod1Component;
  let fixture: ComponentFixture<RSVIPod1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RSVIPod1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RSVIPod1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
