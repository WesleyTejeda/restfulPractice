import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BookStoreComponent } from './book-store/book-store.component';
import { BookLibraryComponent } from './book-library/book-library.component';
import { FormsModule } from '@angular/forms';

const routes: Routes =[
  {path: "store", component: BookStoreComponent},
  {path: "library", component: BookLibraryComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BookStoreComponent,
    BookLibraryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
