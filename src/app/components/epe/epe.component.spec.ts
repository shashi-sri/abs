import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpeComponent } from './epe.component';

describe('EpeComponent', () => {
  let component: EpeComponent;
  let fixture: ComponentFixture<EpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
