import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogrTechComponent } from './catalogr-tech.component';

describe('CatalogrTechComponent', () => {
  let component: CatalogrTechComponent;
  let fixture: ComponentFixture<CatalogrTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogrTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogrTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
