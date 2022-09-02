import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsReservesDetailComponent } from './tickets-reserves-detail.component';

describe('TicketsReservesDetailComponent', () => {
  let component: TicketsReservesDetailComponent;
  let fixture: ComponentFixture<TicketsReservesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsReservesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsReservesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
