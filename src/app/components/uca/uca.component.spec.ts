import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcaComponent } from './uca.component';

describe('UcaComponent', () => {
  let component: UcaComponent;
  let fixture: ComponentFixture<UcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
