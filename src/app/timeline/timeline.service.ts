import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimelineService {
  BASE_URL: string = 'http://localhost:3005/api';
  //ThAssistances/timelineData

  constructor(public _http: HttpClient) {}

  getData(urlPath: string) {
    return this._http.get(`${this.BASE_URL}/${urlPath}`);
  }

  /**
   * @description Get data with POST method
   * @param urlPath
   * @returns
   */
  postData(urlPath: string, params: any = { page: 2, size: 3 }) {
    return this._http.post(`${this.BASE_URL}/${urlPath}`, { body: params });
  }
}
