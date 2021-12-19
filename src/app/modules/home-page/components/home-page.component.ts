import { Component } from '@angular/core';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  constructor(private readonly searchService: SearchService) {}

  onTagSelected(tag: string): void {
    this.searchService.setSelectedTag(tag);
  }
}
