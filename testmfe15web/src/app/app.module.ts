import {Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleComponentComponent } from './example-component/example-component.component';
import {createCustomElement} from "@angular/elements";
import {CardModule} from "primeng/card";
import { HttpClientModule} from "@angular/common/http";
import { PetComponent } from './pet/pet.component';
import {FormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponentComponent,
    PetComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    HttpClientModule,
    FormsModule,
    TableModule
  ],
  providers: [],
  exports: [
    ExampleComponentComponent,
    PetComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const petElement = createCustomElement(PetComponent, { injector: this.injector });
    customElements.define('app-fifteen-example', petElement);
    const exampleElement = createCustomElement(ExampleComponentComponent, { injector: this.injector });
    customElements.define('app-example', exampleElement);
  }
}
