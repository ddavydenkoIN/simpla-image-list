import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsComponent } from './components/tags.component';

@NgModule({
  declarations: [TagsComponent],
  imports: [CommonModule],
  exports: [TagsComponent],
})
export class TagsModule {}
