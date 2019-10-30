import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:3000/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {    
    let body = res;
    console.log('extractData');
    console.log(res);
    return body || { };
  }
 
  getAlbums(): Observable<any> {
    console.log('getAlbums');
    return this.http.get(endpoint + 'albums').pipe(map(this.extractData));
  }

  getAlbum(id): Observable<any> {
    return this.http.get(endpoint + 'albums/' + id).pipe(
      map(this.extractData));
  }

  addAlbum (album): Observable<any> {
    console.log(album);
    return this.http.post<any>(endpoint + 'albums', JSON.stringify(album), httpOptions).pipe(
      tap((album) => console.log(`added album w/ id=${album.id}`)),
      catchError(this.handleError<any>('addAlbum'))
    );
  }

  updateAlbum (id, album): Observable<any> {
    return this.http.put(endpoint + 'albums/' + id, JSON.stringify(album), httpOptions).pipe(
      tap(_ => console.log(`updated album id=${id}`)),
      catchError(this.handleError<any>('updateAlbum'))
    );
  }

  deleteAlbum (id): Observable<any> {
    return this.http.delete<any>(endpoint + 'albums/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted album id=${id}`)),
      catchError(this.handleError<any>('deleteAlbum'))
    );
  }
 
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
