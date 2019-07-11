import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { AcademicsComponent } from './academics/academics.component';
import { ProjectsComponent } from './projects/projects.component';
import { ConnectComponent } from './connect/connect.component';
import { AboutComponent } from './about/about.component';//routing
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path:'',component:AboutComponent},
  { path:'about',component:AboutComponent},
  { path: 'skills', component:SkillsComponent  },
  { path: 'work', component: WorkComponent },
  { path: 'acads', component: AcademicsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'connect', component: ConnectComponent },
  {path :'**', component:AboutComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,{useHash:true}
    )
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

//To avoid declaring the components twice.
export const routComponents = [AboutComponent, SkillsComponent, WorkComponent,
  AcademicsComponent,
  ProjectsComponent,
  ConnectComponent,
];