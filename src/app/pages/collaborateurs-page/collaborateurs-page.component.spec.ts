import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborateursPageComponent } from './collaborateurs-page.component';

describe('CollaborateursPageComponent', () => {
  let component: CollaborateursPageComponent;
  let fixture: ComponentFixture<CollaborateursPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaborateursPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaborateursPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
