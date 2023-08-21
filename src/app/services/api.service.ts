import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string;

  constructor(
    @Inject(HttpClient) private http: HttpClient
  ) {
    this.url = "https://localhost:8000/"
  }
  
  public postAuth(datas: any): Observable<any> {
    return this.http.post(this.url + "auth", datas);
  }
}
