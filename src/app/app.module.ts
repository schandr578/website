import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule, routComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillService } from './skills/service/skill.service';



@NgModule({

  declarations: [
    AppComponent,
    routComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
  ],
  providers: [ SkillService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
