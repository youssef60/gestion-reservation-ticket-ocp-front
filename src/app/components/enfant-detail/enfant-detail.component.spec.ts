import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantDetailComponent } from './enfant-detail.component';

describe('EnfantDetailComponent', () => {
  let component: EnfantDetailComponent;
  let fixture: ComponentFixture<EnfantDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfantDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
