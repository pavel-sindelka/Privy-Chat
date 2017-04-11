import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';
import 'hammerjs';
import {AppRoutingModule} from "./app-routing.module";
import {AngularFireModule} from 'angularfire2';
import {ClipboardModule} from 'ngx-clipboard';
import * as CryptoJS from 'crypto-js';


import {AppComponent} from './app.component';
import {SenderComponent} from './messenger/sender/sender.component';
import {Error404Component} from './error/error404/error404.component';
import {LinkComponent} from './messenger/link/link.component';
import {MessageComponent} from './messenger/message/message.component';
import {MessengerComponent} from './messenger/messenger.component';
import {HowToUseDialogComponent} from './messenger/how-it-works-dialog/how-it-works-dialog.component';

const firebaseConfig = {
  apiKey: "AIzaSyBpMkzjMH-IfDl6tNdj-YdKOhpXGQ4bGaU",
  authDomain: "privy-chat.firebaseapp.com",
  databaseURL: "https://privy-chat.firebaseio.com/",
  storageBucket: "privy-chat.appspot.com"
};

//Encrypt the message with Base64
export const key = CryptoJS.enc.Base64.parse("#base64Key#");
export const iv = CryptoJS.enc.Base64.parse("#hypnoz#");


@NgModule({
  declarations: [
    AppComponent,
    SenderComponent,
    Error404Component,
    LinkComponent,
    MessageComponent,
    MessengerComponent,
    HowToUseDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [HowToUseDialogComponent]
})
export class AppModule {
}
