import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpossTechComponent } from './vposs-tech.component';

describe('VpossTechComponent', () => {
  let component: VpossTechComponent;
  let fixture: ComponentFixture<VpossTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VpossTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VpossTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
