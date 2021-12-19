import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from '../../../services/search.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  urls$!: Observable<string[]>;

  constructor(private readonly searchService: SearchService) {}

  onTagSelected(tag: string): void {
    this.urls$ = this.searchService.getImageUrlsByTag(tag).pipe(first());
    console.log(tag);
  }
}
