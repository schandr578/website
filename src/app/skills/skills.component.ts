import { Component, OnInit } from '@angular/core';
import { SkillSet } from './skillSet'
import { skilled} from './skillSetArray';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent{
  
  selectSkill = skilled;

  selectedSkill:SkillSet;

  constructor() { 


  }
  onSelect(s: SkillSet): void {
    this.selectedSkill = s;
  }


  




  

}
