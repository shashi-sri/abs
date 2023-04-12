import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmssTechComponent } from './omss-tech.component';

describe('OmssTechComponent', () => {
  let component: OmssTechComponent;
  let fixture: ComponentFixture<OmssTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmssTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmssTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
