import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreMobilityComponent } from './store-mobility.component';

describe('StoreMobilityComponent', () => {
  let component: StoreMobilityComponent;
  let fixture: ComponentFixture<StoreMobilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreMobilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreMobilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
