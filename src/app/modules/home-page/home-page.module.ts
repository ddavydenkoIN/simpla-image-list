import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page.component';
import { TagsModule } from '../tags/tags.module';
import { ImageListModule } from '../image-list/image-list.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, TagsModule, ImageListModule, HttpClientModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
