import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {
  GifListData,
  GifListRequest,
  GifListResponse,
  GifListResponseDataItem,
} from '../models';
import { environment } from '../../environments/environment';
import { GET_GIPHY_LIST } from '../routes';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private tags$ = new Subject<string>();
  private gifListData$ = new Subject<GifListData>();

  constructor(
    private readonly httpClient: HttpClient,
    private readonly sanitizer: DomSanitizer
  ) {}

  setSelectedTag(tag: string): void {
    this.tags$.next(tag);
  }

  getSelectedTag(): Observable<string> {
    return this.tags$.asObservable();
  }

  emitGifListData(data: GifListData): void {
    this.gifListData$.next(data);
  }

  retrieveGifListData(): Observable<GifListData> {
    return this.gifListData$.asObservable();
  }

  loadGIFs(payload: GifListRequest): Observable<GifListData | null> {
    return this.httpClient
      .get<GifListResponse>(GET_GIPHY_LIST, {
        params: new HttpParams()
          .set('api_key', environment.giphyApiKey)
          .set('q', payload.tag)
          .set('limit', environment.gifQuantityPerPage)
          .set('offset', payload.offset),
      })
      .pipe(
        map((response: GifListResponse) => this.mapGifListResponse(response)),
        tap((data: GifListData) => this.emitGifListData(data)),
        catchError(() => of(null))
      );
  }

  private mapGifListResponse(response: GifListResponse): GifListData {
    return {
      pageSize: response.pagination.count,
      totalCount: response.pagination.total_count,
      urls: response.data.map((item: GifListResponseDataItem) =>
        this.sanitizer.bypassSecurityTrustResourceUrl(item.embed_url)
      ),
    };
  }
}
