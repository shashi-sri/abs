import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomsComponent } from './doms.component';

describe('DomsComponent', () => {
  let component: DomsComponent;
  let fixture: ComponentFixture<DomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
