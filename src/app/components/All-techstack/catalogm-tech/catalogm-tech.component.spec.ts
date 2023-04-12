import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogmTechComponent } from './catalogm-tech.component';

describe('CatalogmTechComponent', () => {
  let component: CatalogmTechComponent;
  let fixture: ComponentFixture<CatalogmTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogmTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogmTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
