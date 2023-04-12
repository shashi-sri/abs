import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdevopsTechComponent } from './ddevops-tech.component';

describe('DdevopsTechComponent', () => {
  let component: DdevopsTechComponent;
  let fixture: ComponentFixture<DdevopsTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdevopsTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DdevopsTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
