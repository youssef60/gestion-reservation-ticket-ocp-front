import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationEnfantDetailComponent } from './reservation-enfant-detail.component';

describe('ReservationEnfantDetailComponent', () => {
  let component: ReservationEnfantDetailComponent;
  let fixture: ComponentFixture<ReservationEnfantDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationEnfantDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationEnfantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
