import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';

@Injectable({
    providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) { }

  fetchClients(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.API_URL}/users`);
  }

  fetchClient(userId: number): Observable<User> {
    return this.http.get<User>(`${environment.API_URL}/users/${userId}`);
  }
  
  fetchClientPosts(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.API_URL}/users/${userId}/posts`);
  }
}