import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewEncapsulation
} from '@angular/core';

import { DecimalPipe } from '@angular/common';

import { InputGroup } from '../models/input.model';

@Component({
  selector: 'app-add-rule',
  templateUrl: './add-rule.component.html',
  styleUrls: ['./add-rule.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AddRuleComponent implements OnInit {
  titleGroup: InputGroup;
  pubShareGroup: InputGroup;
  myShareGroup: InputGroup;
  submitted = false;
  // @Output() open: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.titleGroup = new InputGroup(
      'Title',
      '',
      'Please enter 100 characters or less',
      'Please provide a title for your rule.'
    );
    this.pubShareGroup = new InputGroup(
      'Publisher Share',
      0.0,
      '',
      'Please enter a value between 0.01 and 99.99'
    );
    this.myShareGroup = new InputGroup(
      'My Share',
      0.0,
      '',
      'Please enter a value between 0.01 and 99.99'
    );
  }

  onSubmit(data) {
    this.submitted = true;
    const customEvent = new Event('open');
    document.body.dispatchEvent(customEvent);

    console.log('submit', data);
  }

  filter(event: any, type: string) {
    if (typeof event.key !== ('number' || 'Backspace')) {
      //keyCode

      console.log(event, type);
      return;
    }
  }
}
