import {Component, Input} from '@angular/core';
import { CardModule } from "primeng/card";

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.css']
})
export class ExampleComponentComponent {
  @Input() displayText: string = "";
  @Input() displayTitle: string = "";
}
