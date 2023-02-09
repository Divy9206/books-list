import { Component } from '@angular/core';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  data: any;

  constructor(private bookService: BookService){}

  reloadAllItem(){
    this.bookService.getBooks().subscribe(res => {
      this.data = res;
    })
  }

}
