import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplecartComponent } from './peoplecart.component';

describe('PeoplecartComponent', () => {
  let component: PeoplecartComponent;
  let fixture: ComponentFixture<PeoplecartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeoplecartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeoplecartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
