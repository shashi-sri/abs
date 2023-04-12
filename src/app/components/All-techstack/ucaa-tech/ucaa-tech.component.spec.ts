import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcaaTechComponent } from './ucaa-tech.component';

describe('UcaaTechComponent', () => {
  let component: UcaaTechComponent;
  let fixture: ComponentFixture<UcaaTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcaaTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcaaTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
