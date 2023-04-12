import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B4uuTechComponent } from './b4uu-tech.component';

describe('B4uuTechComponent', () => {
  let component: B4uuTechComponent;
  let fixture: ComponentFixture<B4uuTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B4uuTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B4uuTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
