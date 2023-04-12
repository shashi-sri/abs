import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcmssTechComponent } from './ccmss-tech.component';

describe('CcmssTechComponent', () => {
  let component: CcmssTechComponent;
  let fixture: ComponentFixture<CcmssTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcmssTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcmssTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
