import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingItemDetailedComponent } from './shopping-item-detailed.component';

describe('ShoppingItemDetailedComponent', () => {
  let component: ShoppingItemDetailedComponent;
  let fixture: ComponentFixture<ShoppingItemDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingItemDetailedComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingItemDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
