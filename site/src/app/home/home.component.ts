import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data = [{
    title: 'Try CLI',
    image: 'https://camo.githubusercontent.com/b4623c1474231db8931288bc2c8347d74939992b/68747470733a2f2f692e696d6775722e636f6d2f324b455747764b2e706e67',
    github: 'https://github.com/preethamvishy/try',
    live: 'https://npmjs.com/package/try-cli',
    description: 'A command line tool to attempt execution of a shell command and retry on schedule until it succeeds. Optionally, repeat the execution on schedule even if it succeeds. 🔁',
    tech: ['Node.js', 'CLI']
  }, {
    title: 'Socialytics',
    image: 'https://camo.githubusercontent.com/ee0b9aabfb0af29f60868f8eb35013fdbf8ff937/68747470733a2f2f692e696d6775722e636f6d2f675147457a754e2e6a7067',
    github: 'https://github.com/preethamvishy/socialytics',
    live: 'https://preethamvishy.github.io/socialytics/instagram?user=instagram',
    description: `Quick, actionable Instagram analytics in under 10 seconds using Instagram's public data. 🚀`,
    tech: ['Angular', 'Node.js', 'Bootstrap', 'HTML', 'CSS']
  },
  {
    title: 'Instalytics',
    image: 'https://camo.githubusercontent.com/ee0b9aabfb0af29f60868f8eb35013fdbf8ff937/68747470733a2f2f692e696d6775722e636f6d2f675147457a754e2e6a7067',
    github: 'https://github.com/preethamvishy/instalytics',
    live: 'https://www.npmjs.com/package/instalytics',
    description: 'Instagram analytics for any user using Node.js using Instagram publicly available data (previous used Instagram public Graph API endpoints).',
    tech: ['Node.js', 'npm']

  },
  {
    title: 'Live Twitter Sentiment Analysis',
    image: 'https://snag.gy/Vju6cw.jpg',
    github: 'https://github.com/preethamvishy/demo',
    live: 'https://visualization-demo.herokuapp.com/',
    description: 'A live searchable twitter sentiment analyzer with Node.js at the back and Angular 4 + Bootstrap on the front.',
    tech: ['Angular', 'Node.js', 'Bootstrap', 'HTML', 'CSS', 'Web Sockets', 'Twitter API']
  }];

  linkedIn = "https://www.linkedin.com/in/preetham-viswanathan/";
  github = "https://www.github.com/preethamvishy"
  npm = "https://www.npmjs.com/~preethamvishy"

  selected = {};

  ngOnInit() {
  }

  navigate(url) {
    window.open(url, "_blank");
  }

  camelize(str) {
    return _.camelCase(str)
  }

  tag(className) {
    if(this.selected[className])
      this.selected[className] = false;
    else 
      this.selected[className] = true;
  }
}

