import { Component, OnInit } from '@angular/core';
import { GetServiceService } from 'src/services/get-service.service';

@Component({
  selector: 'app-book-library',
  templateUrl: './book-library.component.html',
  styleUrls: ['./book-library.component.css']
})
export class BookLibraryComponent implements OnInit {
  title = 'restfulPractice';
  books:any = [];
  
  bookTitle:string = "";
  subtitle:string = "";
  author:string= "";
  published:string= "";
  publisher:string= "";
  pages:string= "";
  description:string= "";
  website:string= "";
  newBook:object = {
    title: "",
    subtitle: "",
    author: "",
    published: "",
    publisher: "",
    pages: "",
    description: "",
    website: ""
  }
  bookUpdate: object = {};
  id:string = "";
  newBookTitle:string = "";
  newSubtitle:string = "";
  newAuthor:string= "";
  newPublished:string= "";
  newPublisher:string= "";
  newPages:string= "";
  newDescription:string= "";
  newWebsite:string= "";

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
  createBook() {
    let bookData:object = {
      title: this.bookTitle,
      subtitle: this.subtitle,
      author: this.author,
      published: this.published,
      publisher: this.publisher,
      pages: this.pages,
      description: this.description,
      website: this.website
    }
    this.getService.createBook(bookData).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    })
  }
  updateBook(){
    console.log(this.id);
    let newData = {
      title: this.newBookTitle,
      subtitle: this.newSubtitle,
      author: this.newAuthor,
      published: this.newPublished,
      publisher: this.newPublisher,
      pages: this.newPages,
      description: this.newDescription,
      website: this.newWebsite,
    }
    this.getService.updateBook(newData, this.id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    })
  }
  setBook(book:any){
    this.newBookTitle = book.title;
    this.newSubtitle = book.subtitle;
    this.newAuthor= book.author;
    this.newPublished= book.published;
    this.newPublisher= book.publisher;
    this.newPages= book.pages;
    this.newDescription= book.description;
    this.newWebsite= book.website;
    this.id = book.id;
  }
}
