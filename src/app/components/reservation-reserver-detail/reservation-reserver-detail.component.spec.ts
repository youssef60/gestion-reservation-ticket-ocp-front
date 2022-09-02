import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationReserverDetailComponent } from './reservation-reserver-detail.component';

describe('ReservationReserverDetailComponent', () => {
  let component: ReservationReserverDetailComponent;
  let fixture: ComponentFixture<ReservationReserverDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationReserverDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationReserverDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
