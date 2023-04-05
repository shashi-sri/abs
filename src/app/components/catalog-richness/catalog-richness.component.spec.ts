import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogRichnessComponent } from './catalog-richness.component';

describe('CatalogRichnessComponent', () => {
  let component: CatalogRichnessComponent;
  let fixture: ComponentFixture<CatalogRichnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogRichnessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogRichnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
