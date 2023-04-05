import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogMarketplaceComponent } from './catalog-marketplace.component';

describe('CatalogMarketplaceComponent', () => {
  let component: CatalogMarketplaceComponent;
  let fixture: ComponentFixture<CatalogMarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogMarketplaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
