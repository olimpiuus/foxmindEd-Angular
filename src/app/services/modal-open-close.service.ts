import { Injectable, ViewChild } from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalOpenCloseService {
  @ViewChild(ModalComponent)
  private modalComponent: ModalComponent;

  setModalComponent(modalComponent: ModalComponent) {
    this.modalComponent = modalComponent;
  }

  closeModal() {
    if (this.modalComponent) {
      this.modalComponent.closeModal();
    }
  }

  openModal() {
    if (this.modalComponent) {
      this.modalComponent.openModal();
    }
  }
}
