import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {

  constructor(private httpClient: HttpClient) { }

  getBooks(){
    return this.httpClient.get("http://localhost:8082/api/books/")
  }

  createBook(book:object){
    return this.httpClient.post("http://localhost:8082/api/books/", book)
  }

  updateBook(book:object, id:string){
    console.log(book, "service")
    return this.httpClient.put<any>("http://localhost:8082/api/books/"+id, book);
  }

  updateCart(id:string){
    return this.httpClient.patch("http://localhost:8082/api/books/cart/add/"+id, {})
  }

  deleteBook(id:string){
    return this.httpClient.delete("http://localhost:8082/api/books/"+id);
  }
}
