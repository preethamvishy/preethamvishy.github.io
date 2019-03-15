import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
import masterData from '../data';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  selected = {};
  skills;
  keys = Object.keys;

  constructor() { }

  ngOnInit() {
    this.skills = masterData.skills;
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
