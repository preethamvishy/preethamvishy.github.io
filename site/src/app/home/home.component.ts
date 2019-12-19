import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import * as _ from "lodash";
declare var $;
import masterData from '../data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  expandPost;
  data;
  featured;
  selected = {};

  constructor(private sanitizer: DomSanitizer) {}
  
  ngOnInit() {
    this.data = masterData.data;
    this.featured = masterData.featured;
  }

  navigate(url) {
    window.open(url, "_blank");
  }

  navigateToCode(item) {
    item.github == null || item.github == undefined ? window.open(item.bitbucket, "_blank") : window.open(item.github, "_blank");
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

  toggleModal(item) {
    this.expandPost = item;
    $("#postExpand").modal("toggle");
  }

  
}

