import { Component, Input, OnInit } from '@angular/core';
import { getDatabase, ref, remove } from 'firebase/database';

@Component({
  selector: 'app-change-item-block',
  templateUrl: './change-item-block.component.html',
  styleUrls: ['./change-item-block.component.sass']
})
export class ChangeItemBlockComponent implements OnInit {
  @Input() bikeId: number;
  db = getDatabase();
  bikeEditLink: string;

  ngOnInit() {
    this.bikeEditLink = `/bikes/${this.bikeId}/edit`;
  }
  edit(e: Event) {
    e.stopPropagation();
  }

  delete(e: Event) {
    e.stopPropagation();

    if (confirm('Delete this bike?')) {
      remove(ref(this.db, `list/${this.bikeId - 1}`));
      console.log(`bike id: ${this.bikeId} is deleted`);
      location.reload();
    }
  }
}
