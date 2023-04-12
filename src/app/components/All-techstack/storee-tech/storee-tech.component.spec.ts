import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreeTechComponent } from './storee-tech.component';

describe('StoreeTechComponent', () => {
  let component: StoreeTechComponent;
  let fixture: ComponentFixture<StoreeTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreeTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreeTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
