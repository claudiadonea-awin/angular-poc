import { 
  EventEmitter, 
  Output, 
  Component, 
} from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: '.myroot',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  // @Output() open: EventEmitter<any> = new EventEmitter();
  
  ngOnInit() {
    
  }
  constructor() {
    // this.open.emit(true);
    document.body.addEventListener('open', function (e) { console.log('Event catched from Angular 5 app'); }, false);
  }

  testEvent(event: EventEmitter<any>) {
    let customEvent = new Event('open');
    document.body.dispatchEvent(customEvent);
    console.log('Event emitted');
  }

}
