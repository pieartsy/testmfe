import {Component, Output} from '@angular/core';

@Component({
  selector: 'app-six',
  templateUrl: './six.component.html',
  styleUrls: ['./six.component.css']
})
export class SixComponent {

  @Output() displayText: string = "";
  @Output() displayTitle: string = ""

  constructor() { }
}
