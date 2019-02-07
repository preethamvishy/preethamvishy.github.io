import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data = [
    {
      title: 'Socialytics',
      image: 'https://camo.githubusercontent.com/ee0b9aabfb0af29f60868f8eb35013fdbf8ff937/68747470733a2f2f692e696d6775722e636f6d2f675147457a754e2e6a7067',
      github: 'https://github.com/preethamvishy/socialytics',
      live: 'https://preethamvishy.github.io/socialytics/instagram?user=instagram',
      description: `Quick, actionable Instagram analytics in under 10 seconds using Instagram's public data. 🚀`,
      tech: ['Angular', 'Node.js', 'Bootstrap', 'HTML', 'CSS']
    },
    {
      title: 'Try CLI',
      image: 'https://camo.githubusercontent.com/b4623c1474231db8931288bc2c8347d74939992b/68747470733a2f2f692e696d6775722e636f6d2f324b455747764b2e706e67',
      github: 'https://github.com/preethamvishy/try',
      live: 'https://npmjs.com/package/try-cli',
      description: 'A command line tool to attempt execution of a shell command and retry on schedule until it succeeds. Optionally, repeat the execution on schedule even if it succeeds. 🔁',
      tech: ['Node.js', 'CLI']
    },
    {
      title: 'Porfolio',
      image: 'https://snag.gy/0Rr5oT.jpg',
      github: 'https://github.com/preethamvishy/preethamvishy.github.io',
      live: 'https://preethamvishy.github.io/',
      description: 'Portfolio hosted on Github Pages.',
      tech: ['Angular', 'Bootstrap', 'HTML', 'CSS']
    },
    
    {
      title: 'Instalytics',
      image: 'https://camo.githubusercontent.com/ee0b9aabfb0af29f60868f8eb35013fdbf8ff937/68747470733a2f2f692e696d6775722e636f6d2f675147457a754e2e6a7067',
      github: 'https://github.com/preethamvishy/instalytics',
      live: 'https://www.npmjs.com/package/instalytics',
      description: 'Instagram analytics as an open-source project dependency.',
      tech: ['Node.js', 'npm']
    },
    {
      title: 'Cafenaut',
      images: ['/assets/images/cafehome.png', '/assets/images/cafegal.png', '/assets/images/cafejobs.png'],
      github: 'https://github.com/preethamvishy/Cafenaut',
      live: 'https://preethamvishy.github.io/Cafenaut/index.html',
      description: 'A simple static website made with HTML and CSS for an imaginary cafe',
      tech: ['HTML', 'CSS']
    },
    {
      title: 'Live Twitter Sentiment Analysis',
      image: 'https://snag.gy/Vju6cw.jpg',
      github: 'https://github.com/preethamvishy/demo',
      live: 'https://visualization-demo.herokuapp.com/',
      description: 'A live searchable twitter sentiment analyzer.',
      tech: ['Angular', 'Node.js', 'Bootstrap', 'HTML', 'CSS', 'Web Sockets', 'Twitter API', 'JSON']
    },
  ];



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
    if (this.selected[className])
      this.selected[className] = false;
    else
      this.selected[className] = true;
  }
}

