import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { AcademicsComponent } from './academics/academics.component';
import { ProjectsComponent } from './projects/projects.component';
import { ConnectComponent } from './connect/connect.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';//routing

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

  declarations: [
    AppComponent,
    SkillsComponent,
    WorkComponent,
    AcademicsComponent,
    ProjectsComponent,
    ConnectComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,{useHash:true}
      
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
