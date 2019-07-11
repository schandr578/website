import { Component, OnInit } from '@angular/core';
import { SkillSet } from './skillSet'
import { skilled} from './skillSetArray';
import { SkillService } from './service/skill.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent{
  
  public selectSkill: SkillSet[];


  constructor(private _skillService: SkillService) { 
  }
  
  ngOnInit()
  {
    this.selectSkill = this._skillService.getSkillSet();
  }


  




  

}
