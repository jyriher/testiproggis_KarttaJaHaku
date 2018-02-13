import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HeaderComponent } from './header/header.component';
import { DirectionsMapDirective } from './directions.directive';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
      DirectionsMapDirective
  ],
  imports: [
    BrowserModule,
      CommonModule,
      FormsModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBXbailwqmTQL47FL9BsaLDkaViXvwpvL0'
      })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
