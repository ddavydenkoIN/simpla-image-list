import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifGalleryComponent } from './gif-gallery.component';
import { SearchService } from "../../../services/search.service";
import { SearchServiceMock } from "../../../models";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import '@types/jest';

describe('ImageListComponent', () => {
  let component: GifGalleryComponent;
  let fixture: ComponentFixture<GifGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GifGalleryComponent],
      providers: [{
        provide: SearchService,
        useValue: SearchServiceMock,
      }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
