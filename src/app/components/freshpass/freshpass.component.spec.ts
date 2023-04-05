import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshpassComponent } from './freshpass.component';

describe('FreshpassComponent', () => {
  let component: FreshpassComponent;
  let fixture: ComponentFixture<FreshpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreshpassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreshpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
