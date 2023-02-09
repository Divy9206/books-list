import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerService } from '../service/spinner.service';
import { finalize } from 'rxjs';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  constructor(public spinnerService: SpinnerService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinnerService.show();
    return next.handle(request).pipe(finalize(() => this.spinnerService.hide()));
  }
}
