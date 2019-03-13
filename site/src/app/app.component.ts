import { Component, OnInit } from '@angular/core';
import masterData from './data';

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

  linkedIn = "https://www.linkedin.com/in/preetham-viswanathan/";
  github = "https://www.github.com/preethamvishy"
  npm = "https://www.npmjs.com/~preethamvishy"

  ngOnInit() {
    this.particleStyle = masterData.particleStyle;
    this.particleParams = masterData.particleParams;
  }

}
