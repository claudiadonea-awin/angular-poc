import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AddRuleComponent } from './add-rule/add-rule.component';
import { InputComponent } from './shared-components/input/input.component';


@NgModule({
  declarations: [
    AppComponent,
    AddRuleComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
