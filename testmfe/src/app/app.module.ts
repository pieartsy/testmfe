import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { SixComponent } from './six/six.component';
import { FormsModule } from "@angular/forms";
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    SixComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
