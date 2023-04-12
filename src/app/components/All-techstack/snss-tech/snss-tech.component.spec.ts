import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnssTechComponent } from './snss-tech.component';

describe('SnssTechComponent', () => {
  let component: SnssTechComponent;
  let fixture: ComponentFixture<SnssTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnssTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnssTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
