import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifGalleryComponent } from './components/gif-gallery.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [GifGalleryComponent],
  imports: [CommonModule, MatPaginatorModule],
  exports: [GifGalleryComponent],
})
export class GifGalleryModule {}
