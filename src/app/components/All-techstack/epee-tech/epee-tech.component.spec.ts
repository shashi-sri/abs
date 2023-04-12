import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpeeTechComponent } from './epee-tech.component';

describe('EpeeTechComponent', () => {
  let component: EpeeTechComponent;
  let fixture: ComponentFixture<EpeeTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpeeTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpeeTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
