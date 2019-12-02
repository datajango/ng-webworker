import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PrimeNumberDemoComponent } from './components/prime-number-demo/prime-number-demo.component';
import { HomeComponent } from './components/home/home.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { AlbumAddComponent } from './components/album-add/album-add.component';
import { AlbumEditComponent } from './components/album-edit/album-edit.component';
import { Demo1Component } from './observable/demo1/demo1.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'prime-number-demo', component: PrimeNumberDemoComponent },
  { path: 'albums', component: AlbumListComponent },
  { path: 'album-details/:id', component: AlbumDetailComponent },
  { path: 'album-add', component: AlbumAddComponent },
  { path: 'album-edit/:id', component: AlbumEditComponent },
  { path: 'observable-demo1', component: Demo1Component},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
