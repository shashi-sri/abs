import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctxComponent } from './octx.component';

describe('OctxComponent', () => {
  let component: OctxComponent;
  let fixture: ComponentFixture<OctxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OctxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OctxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
