import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  baseUrl = 'https://uinames.com/api/';
  constructor(private http: HttpClient) { }

  getNames(count) {
    return this.http.get(`${this.baseUrl}?amount=${count}`);
  }
}
