import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDeliveryComponent } from './date-delivery.component';

describe('DateDeliveryComponent', () => {
  let component: DateDeliveryComponent;
  let fixture: ComponentFixture<DateDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
