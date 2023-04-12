import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamessTechComponent } from './gamess-tech.component';

describe('GamessTechComponent', () => {
  let component: GamessTechComponent;
  let fixture: ComponentFixture<GamessTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamessTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamessTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
