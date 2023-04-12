import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpppTechComponent } from './uppp-tech.component';

describe('UpppTechComponent', () => {
  let component: UpppTechComponent;
  let fixture: ComponentFixture<UpppTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpppTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpppTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
