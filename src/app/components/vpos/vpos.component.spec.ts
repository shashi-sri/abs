import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VposComponent } from './vpos.component';

describe('VposComponent', () => {
  let component: VposComponent;
  let fixture: ComponentFixture<VposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
