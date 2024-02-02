import {Component, OnInit, Output} from '@angular/core';
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'app-six',
  templateUrl: './six.component.html',
  styleUrls: ['./six.component.css']
})
export class SixComponent implements OnInit {

  @Output() displayEvent = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  changeDisplay(text) {
    this.displayEvent.emit(text)
  }
}
