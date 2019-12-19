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

  constructor(private sanitizer:DomSanitizer) {}

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
      <b>Engaged as a Full Stack Developer with a major focus on front-end development using Angular for a Fortune 10 American multinational technology company</b><br/>
      •	Developed feature-rich web user interfaces to manage and monitor the client’s extensive ecosystem of applications, services, and hosts<br/>
      •		Led the front-end development of an internal application to monitor live/historic health of 1000+ hosts across 6+ environments, run test suites on sets of hosts, and commission/decommission hosts as required<br/>
      •	Redesigned and implemented existing UI to optimize user experience, improve deployments and generate reports<br/>
      •	Ideated and developed utilities to drive innovation and streamline team workflows<br/>
      •	Facilitated an estimated cost saving of $14,700 annually by building a utility to automate a bi-monthly task<br/>
      `
    },
    {
      header: 'Northeastern University - Master of Science in Information Systems - Sep 2018 to May 2020 (Expected)',
      content: `
      <b>Flock</b>  |  Angular, Node.js, MongoDB, Bootstrap, HTML, CSS<br/>
      •	Designed and developed a responsive, full-stack application for vacation home rentals using MEAN stack and AWS<br/>
      •	Incorporated login and sign-up flows using platform-independent Facial Recognition for a unique user experience
      •	Applied authentication strategies for role-based front-end accesses and used JWT to secure API endpoints<br/>
      •	Implemented efficient backend using Node.js and MongoDB<br/>
      <br/>
      <b>Personal health informatics system with quick medical emergency response</b>  |  Java, Swing<br/>
      •	Engineered an ecosystem model-based solution to track personal health information and when required, automatically alert emergency services and manage hospital transfers<br/>
      •	Spearheaded the design and implementation using Java Swing by utilizing singleton and factory design patterns<br/>
      •	Employed multi-threading to geo-locate enterprises, dispatch customized emails and generate visual reports<br/>
      <br/>
      <b>Live Cognitive Twitter Tone Visualizer</b>  |  Angular, Node.js, Express.js<br/>
      •	Developed a live cognitive twitter tone analyzer using Angular, Node.js and Twitter Streaming API<br/>
      •	Leveraged IBM Watson Tone Analyzer for natural language processing and WebSocket for live communication between the back end and the front end<br/>
      <br/>
      <b>Social Media Influencer Marketing Agency</b>  |  MySQL<br/>
      •	Charted an elaborate database for an automated social media influencer marketing agency<br/>
      •	Executed complex queries, joins, stored procedures and triggers to ensure smooth transactions<br/>
      <br/>
      `
    }
    
  ]
  
    getText(str) {
      return this.sanitizer.bypassSecurityTrustHtml(str);
    }
}

