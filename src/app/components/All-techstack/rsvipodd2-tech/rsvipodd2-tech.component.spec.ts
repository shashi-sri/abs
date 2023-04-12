import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rsvipodd2TechComponent } from './rsvipodd2-tech.component';

describe('Rsvipodd2TechComponent', () => {
  let component: Rsvipodd2TechComponent;
  let fixture: ComponentFixture<Rsvipodd2TechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rsvipodd2TechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rsvipodd2TechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
