// src/app/hacker-news.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HackerNewsService {
  private baseUrl = 'https://hacker-news.firebaseio.com/v0';

  constructor(private http: HttpClient) {}

  getJobPostings(): Observable<number[]> {
    const url = `${this.baseUrl}/jobstories.json`;
    return this.http.get<number[]>(url);
  }

  getJobDetails(id: number): Observable<any> {
    const url = `${this.baseUrl}/item/${id}.json`;
    return this.http.get<any>(url);
  }
}
