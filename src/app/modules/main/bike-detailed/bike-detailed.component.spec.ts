import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeDetailedComponent } from './bike-detailed.component';

describe('BikeDetailedComponent', () => {
  let component: BikeDetailedComponent;
  let fixture: ComponentFixture<BikeDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BikeDetailedComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BikeDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
