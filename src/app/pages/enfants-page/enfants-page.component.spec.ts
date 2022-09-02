import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantsPageComponent } from './enfants-page.component';

describe('EnfantsPageComponent', () => {
  let component: EnfantsPageComponent;
  let fixture: ComponentFixture<EnfantsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfantsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfantsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
