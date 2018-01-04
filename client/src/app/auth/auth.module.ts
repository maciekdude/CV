import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoopbackLoginComponent } from './loopback/lb-login.component';
import { LoopbackLoginService } from './loopback/lb-login.service';

import { AuthGuard } from './auth.guard';

import { LoopbackRequestInterceptor } from './loopback/lb-req-interceptor.class'
import { LoopbackResponseInterceptor } from './loopback/lb-resp-interceptor.class'

// Add these interceptors to the providers below to enable them
const LOOPBACK_REQ_INTERCEPTOR = {
  provide: HTTP_INTERCEPTORS,
  useClass: LoopbackRequestInterceptor,
  multi: true,
}
const LOOPBACK_RESP_INTERCEPTOR = {
  provide: HTTP_INTERCEPTORS,
  useClass: LoopbackResponseInterceptor,
  multi: true,
}

@NgModule({
  imports:      [ CommonModule, HttpClientModule, ReactiveFormsModule ],
  declarations: [ LoopbackLoginComponent ],
  providers:    [ LoopbackLoginService, AuthGuard],
  exports:      [ LoopbackLoginComponent ]
})
export class AuthModule {
  constructor() { }
}
