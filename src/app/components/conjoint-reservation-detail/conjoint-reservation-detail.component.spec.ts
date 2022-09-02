import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjointReservationDetailComponent } from './conjoint-reservation-detail.component';

describe('ConjointReservationDetailComponent', () => {
  let component: ConjointReservationDetailComponent;
  let fixture: ComponentFixture<ConjointReservationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConjointReservationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjointReservationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
