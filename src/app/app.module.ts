import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HangmanImgComponent } from './hangman-img/hangman-img.component';
import { LettersComponent } from './letters/letters.component';
import { HiddenPasswordComponent } from './hidden-password/hidden-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HangmanImgComponent,
    LettersComponent,
    HiddenPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
