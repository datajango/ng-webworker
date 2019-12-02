import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialLibraryModule } from './material-library/material-library.module';
import { PrimeNumberDemoComponent } from './components/prime-number-demo/prime-number-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { AlbumComponent } from './components/album/album.component';
import { AlbumAddComponent } from './components/album-add/album-add.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { AlbumEditComponent } from './components/album-edit/album-edit.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Demo1Component } from './observable/demo1/demo1.component';
import { BookSearchComponent } from './book-search/main-thread/book-search.component';
import { BookSearchWorkerComponent } from './book-search/worker-thread/book-search-worker.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeNumberDemoComponent,
    HomeComponent,
    AlbumComponent,
    AlbumAddComponent,
    AlbumDetailComponent,
    AlbumEditComponent,
    AlbumListComponent,
    Demo1Component,
    BookSearchComponent,
    BookSearchWorkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialLibraryModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
