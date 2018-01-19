import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewEncapsulation,
 } from '@angular/core';

import { DecimalPipe } from '@angular/common';

import { InputGroup } from './add-rule.model';

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
  // @Output() open: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.titleGroup = new InputGroup(
      'Title',
      '',
      'Please enter 100 characters or less',
      'Please provide a title for your rule.'
    );
    this.pubShareGroup = new InputGroup('Publisher Share', 0.00, '');
    this.myShareGroup = new InputGroup('My Share', 0.00, '');
  }

  onSubmit(data) {
    const customEvent = new Event('open');
    document.body.dispatchEvent(customEvent);

    console.log('submit', data);
  }

}
