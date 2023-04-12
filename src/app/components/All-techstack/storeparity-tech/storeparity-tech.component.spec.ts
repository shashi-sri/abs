import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreparityTechComponent } from './storeparity-tech.component';

describe('StoreparityTechComponent', () => {
  let component: StoreparityTechComponent;
  let fixture: ComponentFixture<StoreparityTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreparityTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreparityTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
