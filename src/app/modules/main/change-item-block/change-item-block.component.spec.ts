import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeItemBlockComponent } from './change-item-block.component';

describe('ChangeItemBlockComponent', () => {
  let component: ChangeItemBlockComponent;
  let fixture: ComponentFixture<ChangeItemBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeItemBlockComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeItemBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
