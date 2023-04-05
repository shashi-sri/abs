import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalDevOpsComponent } from './digital-dev-ops.component';

describe('DigitalDevOpsComponent', () => {
  let component: DigitalDevOpsComponent;
  let fixture: ComponentFixture<DigitalDevOpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalDevOpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalDevOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
