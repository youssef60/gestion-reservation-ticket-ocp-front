import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquesPageComponent } from './statistiques-page.component';

describe('StatistiquesPageComponent', () => {
  let component: StatistiquesPageComponent;
  let fixture: ComponentFixture<StatistiquesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiquesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiquesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
