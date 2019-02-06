import { Component, OnInit } from '@angular/core';

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
    description: 'A command line tool to attempt execution of a shell command and retry on schedule until it succeeds. Optionally, repeat the execution on schedule even if it succeeds. 🔁'
  }, {
    title: 'Socialytics',
    image: 'https://camo.githubusercontent.com/ee0b9aabfb0af29f60868f8eb35013fdbf8ff937/68747470733a2f2f692e696d6775722e636f6d2f675147457a754e2e6a7067',
    github: 'https://github.com/preethamvishy/socialytics',
    live: 'https://preethamvishy.github.io/socialytics/instagram?user=instagram',
    description: 'Desktop and web app for Instagram analytics in under 10 seconds. 🚀'
  },
  {
    title: 'Instalytics',
    image: 'https://camo.githubusercontent.com/ee0b9aabfb0af29f60868f8eb35013fdbf8ff937/68747470733a2f2f692e696d6775722e636f6d2f675147457a754e2e6a7067',
    github: 'https://github.com/preethamvishy/instalytics',
    live: 'https://www.npmjs.com/package/instalytics',
    description: 'Instagram analytics for any user using Node.js using Instagram publicly available data (previous used Instagram public Graph API endpoints).'
  }];

  linkedIn = "https://www.linkedin.com/in/preetham-viswanathan/";
  github = "https://www.github.com/preethamvishy"
  npm = "https://www.npmjs.com/~preethamvishy"
  ngOnInit() {

  }

  navigate(url) {
    window.open(url, "_blank");
  }
}
