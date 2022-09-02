import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsReseveeComponent } from './tickets-resevee.component';

describe('TicketsReseveeComponent', () => {
  let component: TicketsReseveeComponent;
  let fixture: ComponentFixture<TicketsReseveeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsReseveeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsReseveeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
