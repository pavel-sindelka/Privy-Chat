import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import * as CryptoJS from 'crypto-js';
import {key, iv} from '../../app.module';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message: string;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    if (this.route.snapshot.data.message) {
      const des = CryptoJS.AES.decrypt(this.route.snapshot.data.message, key, {iv: iv});
      this.message = des.toString(CryptoJS.enc.Utf8);
    } else {
      this.router.navigate(['404']);
    }
  }
}
