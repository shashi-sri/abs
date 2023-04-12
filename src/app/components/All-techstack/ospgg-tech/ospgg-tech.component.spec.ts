import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OspggTechComponent } from './ospgg-tech.component';

describe('OspggTechComponent', () => {
  let component: OspggTechComponent;
  let fixture: ComponentFixture<OspggTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OspggTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OspggTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
