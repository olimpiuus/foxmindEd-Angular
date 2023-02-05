import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDeliceryComponent } from './date-delicery.component';

describe('DateDeliceryComponent', () => {
  let component: DateDeliceryComponent;
  let fixture: ComponentFixture<DateDeliceryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateDeliceryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateDeliceryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
