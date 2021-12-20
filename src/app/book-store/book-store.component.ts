import { Component, OnInit } from '@angular/core';
import { GetServiceService } from 'src/services/get-service.service';

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css']
})
export class BookStoreComponent implements OnInit {
  title = 'restfulPractice';
  message = "";
  books:any = [];

  constructor (private getService: GetServiceService) {}

  ngOnInit(): void{
    this.getData();
  }
  getData() {
    this.getService.getBooks().subscribe(data => {
      console.log(data);
      this.books = data;
    });
  }
  addToCart(id:string){
    this.getService.updateCart(id).subscribe(data => {
      console.log(data)
      this.ngOnInit();
    })
  }

  removeBook(id:string) {
    this.getService.deleteBook(id).subscribe(data => {
      this.ngOnInit();
    })
  }
}

