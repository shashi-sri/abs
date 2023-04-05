import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcmsComponent } from './ccms.component';

describe('CcmsComponent', () => {
  let component: CcmsComponent;
  let fixture: ComponentFixture<CcmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
