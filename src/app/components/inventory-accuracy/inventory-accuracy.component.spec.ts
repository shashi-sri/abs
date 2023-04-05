import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAccuracyComponent } from './inventory-accuracy.component';

describe('InventoryAccuracyComponent', () => {
  let component: InventoryAccuracyComponent;
  let fixture: ComponentFixture<InventoryAccuracyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryAccuracyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryAccuracyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
