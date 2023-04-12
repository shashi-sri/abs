import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshpasssTechComponent } from './freshpasss-tech.component';

describe('FreshpasssTechComponent', () => {
  let component: FreshpasssTechComponent;
  let fixture: ComponentFixture<FreshpasssTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreshpasssTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreshpasssTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
