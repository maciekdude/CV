import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import {Observable} from 'rxjs/Rx';

@Injectable()
export class LoopbackResponseInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        console.log(event)
      }
      return event
    })
  }
}
