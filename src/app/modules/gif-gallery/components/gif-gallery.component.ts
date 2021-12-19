import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { SearchService } from '../../../services/search.service';
import { Observable } from 'rxjs';
import { GifListData } from '../../../models';
import { environment } from '../../../../environments/environment';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { switchMap, tap } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-gif-gallery',
  templateUrl: './gif-gallery.component.html',
  styleUrls: ['./gif-gallery.component.scss'],
})
export class GifGalleryComponent implements OnInit {
  data$!: Observable<GifListData | null>;

  selectedTag!: string;

  constructor(private readonly searchService: SearchService) {}

  ngOnInit(): void {
    this.data$ = this.searchService.retrieveGifListData();

    this.searchService
      .getSelectedTag()
      .pipe(untilDestroyed(this))
      .pipe(
        tap((tag: string) => (this.selectedTag = tag)),
        switchMap((tag: string) =>
          this.searchService.loadGIFs({
            tag,
            count: environment.gifQuantityPerPage,
            offset: 0,
          })
        )
      )
      .subscribe();
  }

  handlePaginatorEvent(event: PageEvent): void {
    //http client auto unsubscribes, so in this case there is no need to do it manually.
    this.searchService
      .loadGIFs({
        tag: this.selectedTag,
        count: environment.gifQuantityPerPage,
        offset: event.pageIndex * environment.gifQuantityPerPage,
      })
      .subscribe();
  }
}
