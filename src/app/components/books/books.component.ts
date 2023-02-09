import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  data: any = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5,10,15,20];
  searchText: string = '';

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getAllBooks();
  }

  private getAllBooks() {
    this.bookService.getBooks().subscribe(response => {
      this.data = response.items;
    });
  }

  onTableDataChange(event:any){
    this.page = event;
    this.getAllBooks();
  }

  onTableSizeChange(event:any): void{
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllBooks();
  }

  onSerchTextEntered(searchValue: string){
    this.searchText = searchValue;    
  }
}
