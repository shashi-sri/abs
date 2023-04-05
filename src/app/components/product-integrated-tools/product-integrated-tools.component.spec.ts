import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductIntegratedToolsComponent } from './product-integrated-tools.component';

describe('ProductIntegratedToolsComponent', () => {
  let component: ProductIntegratedToolsComponent;
  let fixture: ComponentFixture<ProductIntegratedToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductIntegratedToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductIntegratedToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
