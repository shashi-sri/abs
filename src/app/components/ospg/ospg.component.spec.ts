import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OspgComponent } from './ospg.component';

describe('OspgComponent', () => {
  let component: OspgComponent;
  let fixture: ComponentFixture<OspgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OspgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OspgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
