import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllTechComponent } from './controll-tech.component';

describe('ControllTechComponent', () => {
  let component: ControllTechComponent;
  let fixture: ComponentFixture<ControllTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControllTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControllTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
