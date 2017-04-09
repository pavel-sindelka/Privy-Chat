import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  link: string;

  constructor(private router: Router, private snackBar: MdSnackBar) {
  }

  ngOnInit() {
    this.link = window.location.href.replace('/link/', '/message/');
  }

  copied() {
    this.router.navigate(['/']);
    this.snackBar.open('Link has been copied!', null, {
      duration: 2000,
    });
  }
}
