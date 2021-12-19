import { SafeUrl } from '@angular/platform-browser';

export interface GifListData {
  totalCount: number;
  pageSize: number;
  urls: SafeUrl[];
}

export interface GifListRequest {
  tag: string;
  count: number;
  offset: number;
}

export interface GifListResponse {
  pagination: GifListResponsePagination;
  data: GifListResponseDataItem[];
}

export interface GifListResponseDataItem {
  embed_url: string;
}

export interface GifListResponsePagination {
  count: number;
  offset: number;
  total_count: number;
}
