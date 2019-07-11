import { Injectable } from '@angular/core';
import { skilled } from '../skillSetArray';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }

  getSkillSet()
  {
    return skilled;
  }
}
