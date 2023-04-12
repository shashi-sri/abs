import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomssTechComponent } from './domss-tech.component';

describe('DomssTechComponent', () => {
  let component: DomssTechComponent;
  let fixture: ComponentFixture<DomssTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomssTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomssTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
