import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.css']
})
export class ExampleComponentComponent {
  @Input() displayText: string = "";
}
