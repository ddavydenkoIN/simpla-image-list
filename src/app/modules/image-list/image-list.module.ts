import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageListComponent } from './components/image-list.component';

@NgModule({
  declarations: [ImageListComponent],
  imports: [CommonModule],
  exports: [ImageListComponent],
})
export class ImageListModule {}
