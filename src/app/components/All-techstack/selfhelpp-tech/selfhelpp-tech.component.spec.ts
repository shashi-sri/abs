import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfhelppTechComponent } from './selfhelpp-tech.component';

describe('SelfhelppTechComponent', () => {
  let component: SelfhelppTechComponent;
  let fixture: ComponentFixture<SelfhelppTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfhelppTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfhelppTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
