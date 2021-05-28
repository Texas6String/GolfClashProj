import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap} from 'rxjs/operators'
import { IClubData, IClubType } from '../shared/clubdata';

@Injectable({ providedIn: 'root'})
export class clubService {
    private clubTypeUrl = 'assets/data/clubtypes.json';
    
    constructor(private http: HttpClient){}

    getClubTypes() : Observable<IClubType[]> {        
        return this.http.get<IClubType[]>(this.clubTypeUrl).pipe(
        tap(data => console.log('Types All: ', JSON.stringify(data)))
        , catchError(this.handleError)
        );       
    }

    getClubList(clubType: string) : Observable<string[]> {  
      
      return this.http.get<string[]>('assets/data/' + clubType.toLowerCase() + '.json').pipe(
      tap(data => console.log('Types All: ', JSON.stringify(data)))
      , catchError(this.handleError)
      );
    }


    getClubData(clubname: string) : Observable<IClubData> {
      return this.http.get<IClubData>('assets/data/clubs/'+ clubname.toLowerCase() +'.json').pipe(
        tap(data => console.log('Data All: ', JSON.stringify(data)))
        , catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse): Observable<never> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }

}