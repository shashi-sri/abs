import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngexTechComponent } from './engex-tech.component';

describe('EngexTechComponent', () => {
  let component: EngexTechComponent;
  let fixture: ComponentFixture<EngexTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngexTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngexTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
