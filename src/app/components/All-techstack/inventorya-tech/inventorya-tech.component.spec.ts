import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryaTechComponent } from './inventorya-tech.component';

describe('InventoryaTechComponent', () => {
  let component: InventoryaTechComponent;
  let fixture: ComponentFixture<InventoryaTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryaTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryaTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
