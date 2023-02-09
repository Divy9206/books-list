import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { BooksComponent } from './components/books/books.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerService } from './service/spinner.service';
import { SpinnerInterceptor } from './interceptor/spinner.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    SearchComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,MatCardModule, FlexLayoutModule,
    HttpClientModule, NgxPaginationModule, MatFormFieldModule, MatInputModule,FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [SpinnerService,
  {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
