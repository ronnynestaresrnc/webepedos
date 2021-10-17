import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
      FormsModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
  ],

  bootstrap: [AppComponent,RouterModule]

})
export class AppModule { }
