import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CLIENT_ID, CLIENT_SECRET } from '../gitHubCred';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private httpClient: HttpClient) {}

  public getUserProfile(searchQuery): Observable<any> {
    // let profileURL = `https://api.github.com/users/${searchQuery}/?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    let profileURL = `https://api.github.com/users/${searchQuery}`;
    return this.httpClient
      .get<any>(profileURL)
      .pipe(retry(1), catchError(this.handleError));
  }

  public getGithubRepos(searchQuery): Observable<any[]> {
    let reposURL = `https://api.github.com/users/${searchQuery}/repos`;
    return this.httpClient
      .get<any[]>(reposURL)
      .pipe(retry(1), catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client side error
      errorMessage = `MESSAGE: ${error.error.message}`;
    } else {
      // Server side error
      errorMessage = `STATUS: ${error.status} MESSAGE: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
