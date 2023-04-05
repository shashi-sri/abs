import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAISComponent } from './aais.component';

describe('AAISComponent', () => {
  let component: AAISComponent;
  let fixture: ComponentFixture<AAISComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AAISComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AAISComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
