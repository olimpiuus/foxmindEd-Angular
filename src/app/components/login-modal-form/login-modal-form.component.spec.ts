import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginModalFormComponent } from './login-modal-form.component';

describe('LoginModalFormComponent', () => {
  let component: LoginModalFormComponent;
  let fixture: ComponentFixture<LoginModalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginModalFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
