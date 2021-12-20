import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsComponent } from './components/tags.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TagsComponent],
  imports: [CommonModule, FormsModule],
  exports: [TagsComponent],
})
export class TagsModule {}
