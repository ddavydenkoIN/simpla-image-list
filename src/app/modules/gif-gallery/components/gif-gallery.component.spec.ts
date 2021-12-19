import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifGalleryComponent } from './gif-gallery.component';

describe('ImageListComponent', () => {
  let component: GifGalleryComponent;
  let fixture: ComponentFixture<GifGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GifGalleryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
