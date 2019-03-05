import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})

export class ExperienceComponent {
  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 40;
  expandEnabled: boolean = true;

  constructor(private sanitizer:DomSanitizer)
  {}

  items = [
    {
      header: 'Mumbai University - Bachelor of Engineering in Computer Engineering - Aug 2012 to May 2016',
      content: `
      <b>Research on Enhancing the security of Advanced Encryption Standard (AES) Algorithm in Wireless Networks</b><br/>
      •	Devised the algorithm to propose improvement over the existing standard<br/>
      •	Researched extensively on ciphers, Rijndael’s algorithm and AES, and papers published on these subjects<br/>
      `
    },
    {
      header: 'Infosys Limited - Systems Engineer - Jul 2016 to Aug 2018',
      content: `
      <b>Worked as a Full Stack Developer with a major focus on front-end development using Angular for a Fortune 10 American multinational technology company</b><br/>
      •	Developed feature-rich web user interfaces collaboratively to manage and monitor the client’s extensive ecosystem of applications, services, and hosts<br/>
      •	Redesigned and implemented existing UI to optimize user experience, improve deployments and generate reports<br/>
      •	Independently developed utilities to drive innovation and streamline workflows in addition to role responsibilities<br/>
      •	Facilitated an estimated cost saving of $12,600 annually by building a utility to automate a bi-monthly task<br/>
      `
    },
    {
      header: 'Northeastern University - Master of Science in Information Systems - Sep 2018 to May 2020 (Expected)',
      content: `
      <b>Personal health informatics system with quick medical emergency response</b>  |  Java, Swing<br/>
      •	Engineered an ecosystem model-based solution to track personal health information and when required, automatically alert emergency services and manage hospital transfers<br/>
      •	Spearheaded the design and implementation using Java Swing by utilizing singleton and factory design patterns<br/>
      •	Employed multi-threading to geo-locate enterprises, dispatch customized emails and generate visual reports<br/>
      <br/>
      <b>Live Twitter Sentiment Analyzer</b>  |  Angular, Node.js, Express.js<br/>
      •	Developed a live cognitive twitter tone analyzer using Angular, Node.js and Twitter Streaming API<br/>
      •	Leveraged IBM Watson Tone Analyzer for natural language processing and WebSocket for live communication between the back end and the front end<br/>
      <br/>

      `
    }
    
  ]
  
    getText(str) {
      return this.sanitizer.bypassSecurityTrustHtml(str);
    }
}

