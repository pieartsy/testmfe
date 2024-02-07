import {Component, EventEmitter, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-six',
  templateUrl: './six.component.html',
  styleUrls: ['./six.component.css']
})
export class SixComponent {

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
