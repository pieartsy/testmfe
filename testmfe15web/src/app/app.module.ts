import {Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleComponentComponent } from './example-component/example-component.component';
import {createCustomElement} from "@angular/elements";

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [
    ExampleComponentComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const exampleElement = createCustomElement(ExampleComponentComponent, { injector: this.injector });
    customElements.define('app-fifteen-example', exampleElement);
  }
}