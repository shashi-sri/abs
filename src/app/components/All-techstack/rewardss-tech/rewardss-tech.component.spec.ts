import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardssTechComponent } from './rewardss-tech.component';

describe('RewardssTechComponent', () => {
  let component: RewardssTechComponent;
  let fixture: ComponentFixture<RewardssTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardssTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardssTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
