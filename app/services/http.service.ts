import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
  requestCounts: number = 0;
    constructor(
        private http: HttpClient,
    ) { }

  /**
   * Invoke function should be able to handle any HTTP request based on the @params
   */
    invoke(params): Observable<any> {
        
    this.requestCounts++;
    if (params) {
      const method = params.method.toLowerCase();
      const { url, path, body, query } = params;

      const requestURL = `${url}/${path}`;

      let request;
      let requestParams = new HttpParams();
      let requestHeaders = new HttpHeaders();

      /**
       * DEFAULT HEADERS
       */
        //requestHeaders = requestHeaders.set('Content-Type', 'application/json');
        //requestHeaders = requestHeaders.set('Content-Type', 'application/json');
      //  if (this.authService.isLogged())
        

      /**
       * CUSTOM REQUEST QUERY (?key=value)
       */
      if (query) {
        for (const key in query) {
          if (query.hasOwnProperty(key)) {
            requestParams = requestParams.append(key, query[key]);
          }
        }
      }

      const requestOptions = {
        //headers: requestHeaders,
          params: requestParams,
          responseType: 'text'
      };

      /**
       * HANDLE GET, POST etc. REQUESTS
       */
      if (method === 'get') {
        request = this.http[method](requestURL, requestOptions);
      } else if (method === 'post' || method === 'put') {
        request = this.http[method](
          requestURL,
          JSON.stringify(body),
          requestOptions,
        );
      } else {
        console.error('Unknown request method.');
      }
     
      /**
       * RETURN API REQUEST
       */
      return request;
    }
  }
}