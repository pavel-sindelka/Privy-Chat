import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Router} from '@angular/router';
import {MdSnackBar} from '@angular/material';
import * as CryptoJS from 'crypto-js';
import {key, iv} from '../../app.module';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  messages: FirebaseListObservable<string[]>;
  message: string;

  constructor(private af: AngularFire, private router: Router, private snackBar: MdSnackBar) {
  }

  ngOnInit() {
    this.messages = this.af.database.list('/messages');
  }

  sendMessage() {
    if (this.message && this.message.length > 0) {
      const encrypted = CryptoJS.AES.encrypt(this.message, key, {iv: iv}).toString();
      console.log(encrypted);
      this.messages.push(encrypted).then(item => {
        this.router.navigate(['link', item.key]);
        this.snackBar.open('Message has been send!', null, {
          duration: 2000,
        });
      });
    } else {
      this.snackBar.open('Please enter message!', null, {
        duration: 2000,
      });
    }
  }
}
