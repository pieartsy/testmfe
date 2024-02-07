import {
  ChangeDetectorRef,
  Component,
  ElementRef, EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';
import { CardModule } from "primeng/card";
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {query} from "@angular/animations";
import {Pet} from "../pet";

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ExampleComponentComponent {
  constructor() { }

  queriedPet: string = "";
  submittedPet: object = {};

  addPet(form: NgForm) {
    const name: string = form.value.name.trim();
    const species: string = form.value.species.trim();
    const personality: string = form.value.personality.trim();
    this.submittedPet = {name, species, personality};
  }

  queryPet(form: NgForm) {
    console.log(form);
    this.queriedPet = form.value.searchname;
  }
}
