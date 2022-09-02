import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjointsPageComponent } from './conjoints-page.component';

describe('ConjointsPageComponent', () => {
  let component: ConjointsPageComponent;
  let fixture: ComponentFixture<ConjointsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConjointsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjointsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
