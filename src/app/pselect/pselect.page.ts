import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pselect',
  templateUrl: './pselect.page.html',
  styleUrls: ['./pselect.page.scss'],
})
export class PselectPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('init');
  }

  go(item) {
    console.log('called go()');
    this.router.navigate(['/excercisepage', item]);
  }

}
