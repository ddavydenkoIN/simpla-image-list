import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page.component';
import { TagsModule } from '../tags/tags.module';
import { HttpClientModule } from '@angular/common/http';
import { GifGalleryModule } from '../gif-gallery/gif-gallery.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, TagsModule, GifGalleryModule, HttpClientModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
