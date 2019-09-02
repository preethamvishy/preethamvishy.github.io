import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import masterData from './data';
import { share } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: string = 'app';
  particleStyle: object = {};
  particleParams: object = {};
  width: number = 100;
  height: number = 100;
  activeFragment;

  linkedIn = "https://www.linkedin.com/in/preetham-viswanathan/";
  github = "https://www.github.com/preethamvishy"
  npm = "https://www.npmjs.com/~preethamvishy"

  constructor(private route: ActivatedRoute, public sanitizer: DomSanitizer, private router: Router) {
    if (this.route.fragment) {
      this.activeFragment = this.route.fragment
    }
  }
  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  goTo(str) {
    // window.location.hash = '';
    // window.location.hash = str;
    document.getElementById(str).scrollIntoView({ behavior: "smooth", block: 'start'  });
    const el = document.getElementById('navbar-toggler')
    if (el.getAttribute('aria-expanded') == 'true') {
      el.click();
    }
  }

}
