import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent {
  @Output()
  onTagSelected = new EventEmitter();

  tags = ['dog', 'cat', 'bunny'];

  selectATag(tag: string): void {
    this.onTagSelected.emit(tag);
  }
}
