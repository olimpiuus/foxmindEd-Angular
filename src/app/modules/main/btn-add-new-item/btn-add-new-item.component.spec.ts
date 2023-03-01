import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAddNewItemComponent } from './btn-add-new-item.component';

describe('BtnAddNewItemComponent', () => {
  let component: BtnAddNewItemComponent;
  let fixture: ComponentFixture<BtnAddNewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BtnAddNewItemComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BtnAddNewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
