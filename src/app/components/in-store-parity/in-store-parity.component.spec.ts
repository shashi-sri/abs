import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InStoreParityComponent } from './in-store-parity.component';

describe('InStoreParityComponent', () => {
  let component: InStoreParityComponent;
  let fixture: ComponentFixture<InStoreParityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InStoreParityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InStoreParityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
