import { Component, Input, SimpleChanges } from '@angular/core';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input( {required: true} ) duration = 0;
  @Input( {required: true} ) message = '';

  constructor() { 
    console.log('CounterComponent created');
    console.log('-',repeat(10));
  }

  ngonChanges(changes: SimpleChanges) {
    console.log('ngonChanges');
    console.log('-',repeat(10));
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit');
    console.log('-',repeat(10));
    console.log('duration:', this.duration);
    console.log('message:', this.message);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log('-',repeat(10));
  }

  ngOnDestroy() {
    console.log('ngDestroy');
    console.log('-',repeat(10));
  }


}
