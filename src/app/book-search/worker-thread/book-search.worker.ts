import { DoWork, ObservableWorker } from 'observable-webworker';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  distinctUntilChanged,
  map,
  shareReplay,
  switchMap,
} from 'rxjs/operators';
import {
  getAccumulatedSearchResults,
  SearchResults,
  WorkerInput,
} from '../common/book-search.utils';

@ObservableWorker()
export class BookSearchWorker implements DoWork<WorkerInput, SearchResults> {
  public work(input$: Observable<WorkerInput>): Observable<SearchResults> {
    const url$ = input$.pipe(
      map(({ url }) => url),
      distinctUntilChanged(),
    );

    const searchTerm$ = input$.pipe(
      map(({ searchTerm }) => searchTerm),
      distinctUntilChanged(),
      shareReplay(1),
    );

    return url$.pipe(
      switchMap(url => ajax({ url, responseType: 'text' })),
      map(result => result.response),
      switchMap(bookText => {
        return searchTerm$.pipe(
          switchMap(searchTerm =>
            getAccumulatedSearchResults(searchTerm, bookText),
          ),
        );
      }),
    );
  }
}
