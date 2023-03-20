import { TestBed } from '@angular/core/testing';

import { ModalOpenCloseService } from './modal-open-close.service';

describe('ModalOpenCloseService', () => {
  let service: ModalOpenCloseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalOpenCloseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
