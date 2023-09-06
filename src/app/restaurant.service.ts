import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Restaurant } from './restaurant';

@Injectable({ providedIn: 'root' })
export class RestaurantService {

  private restaurantUrl = 'api/restaurantes';  

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getRestaurant(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.restaurantUrl).pipe(
      tap(_ => console.log('fetched restaurant')),
      catchError(this.handleError<Restaurant[]>('getRestaurant', []))
    );
  }

  getcarta(id: number): Observable<Restaurant> {
    const url = `${this.restaurantUrl}/${id}`;
    return this.http.get<Restaurant>(url).pipe(
      tap(_ => console.log(`fetched restaurant id=${id}`)),
      catchError(this.handleError<Restaurant>(`getcarta id=${id}`))
    );
  }

  searchRestaurant(term: string): Observable<Restaurant[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Restaurant[]>(`${this.restaurantUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        console.log(`found plato matching "${term}"`) :
        console.log(`no plato matching "${term}"`)),
      catchError(this.handleError<Restaurant[]>('searchRestaurant', []))
    );
  }

  addPlato(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(this.restaurantUrl, restaurant, this.httpOptions).pipe(
      tap((newRestaurant: Restaurant) => console.log(`added restaurant w/ id=${newRestaurant.id}`)),
      catchError(this.handleError<Restaurant>('addPlato'))
    );
  }

  deletePlato(id: number): Observable<Restaurant> {
    const url = `${this.restaurantUrl}/${id}`;
    return this.http.delete<Restaurant>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted plato id=${id}`)),
      catchError(this.handleError<Restaurant>('deletePlato'))
    );
  }

  updateplato(restaurant: Restaurant): Observable<any> {
    return this.http.put(this.restaurantUrl, restaurant, this.httpOptions).pipe(
      tap(_ => console.log(`updated plato id=${restaurant.id}`)),
      catchError(this.handleError<any>('updateplato'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

