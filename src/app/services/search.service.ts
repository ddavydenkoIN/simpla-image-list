import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private readonly httpClient: HttpClient) {}

  getImageUrlsByTag(tag: string): Observable<string[]> {
    return of([
      'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg',
      'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg',
      'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg',
    ]);
  }
}
