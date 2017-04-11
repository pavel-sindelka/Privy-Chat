import {Component, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';

import {HowToUseDialogComponent} from './how-it-works-dialog/how-it-works-dialog.component'

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {

  constructor(private dialog: MdDialog) {
  }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(HowToUseDialogComponent);
  }
}
