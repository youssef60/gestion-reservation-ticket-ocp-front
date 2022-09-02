import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjointDetailComponent } from './conjoint-detail.component';

describe('ConjointDetailComponent', () => {
  let component: ConjointDetailComponent;
  let fixture: ComponentFixture<ConjointDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConjointDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjointDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
