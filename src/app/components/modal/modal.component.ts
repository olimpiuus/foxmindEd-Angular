import { Component,AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ModalOpenCloseService } from 'src/app/services/modal-open-close.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          transform: 'scale(1)',
          opacity: 1
        })
      ),
      state(
        'closed',
        style({
          transform: 'scale(0)',
          opacity: 0
        })
      ),
      transition('closed <=> open', [animate('0.5s')])
    ])
  ]
})
export class ModalComponent implements AfterViewInit{
  constructor(public modalService: ModalOpenCloseService) {}

  isOpen = false;

  ngAfterViewInit() {
    this.modalService.setModalComponent(this);
  }

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }
}
