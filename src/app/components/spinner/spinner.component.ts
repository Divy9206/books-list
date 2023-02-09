import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { SpinnerService } from 'src/app/service/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit{
  color = 'primary';
  modes = 'indeterminate' as const;
  value = 50;
  isLoading: Subject<boolean> = this.spinnerService.isLoading;

  constructor(private spinnerService: SpinnerService){
    
  }
  ngOnInit(): void {
    
  }

}
