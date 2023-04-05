import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RSVIPod2Component } from './rsvi-pod2.component';

describe('RSVIPod2Component', () => {
  let component: RSVIPod2Component;
  let fixture: ComponentFixture<RSVIPod2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RSVIPod2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RSVIPod2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
