import { of } from "rxjs";

import '@types/jest';

export const SearchServiceMock = {
  setSelectedTag: jest.fn(),

  getSelectedTag: jest.fn(() => of(null)),

  emitGifListData: jest.fn(),

  retrieveGifListData: jest.fn(() => of(null)),

  loadGIFs: jest.fn(() => of(null)),
}
