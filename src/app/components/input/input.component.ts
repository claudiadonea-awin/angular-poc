import { Component, OnInit, Input } from '@angular/core';

import { InputGroup } from '../../models/input.model';
import { EventEmitter } from 'selenium-webdriver';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() inputConfig: InputGroup;

  constructor() {}

  ngOnInit() {}
}
