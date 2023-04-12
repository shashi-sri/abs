import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rsvipodd1TechComponent } from './rsvipodd1-tech.component';

describe('Rsvipodd1TechComponent', () => {
  let component: Rsvipodd1TechComponent;
  let fixture: ComponentFixture<Rsvipodd1TechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rsvipodd1TechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rsvipodd1TechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
