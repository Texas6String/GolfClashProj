import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UnderconstructionComponent } from './underconstruction/underconstruction.component';
import { SurvivalComponent } from './survival/survival.component';
import { ClubsComponent } from './clubs/clubs.component';
import { ToolsComponent } from './tools/tools.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ClubDisplayComponent } from './club-display/club-display.component';
import { ClubPickerComponent } from './club-picker/club-picker.component';

import {clubService} from './shared/shared.service';
import { ClubDisplayRowComponent } from './club-display-row/club-display-row.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UnderconstructionComponent,
    SurvivalComponent,
    ClubsComponent,
    ToolsComponent,
    WelcomeComponent,
    ClubDisplayComponent,
    ClubPickerComponent,
    ClubDisplayRowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([

      { path: '', redirectTo: '/welcome', pathMatch: 'full' },
      { path: 'welcome', component: WelcomeComponent},
      { path: 'home', component: HomeComponent},
      { path: 'about', component: AboutComponent},
      { path: 'tools', component: ToolsComponent},
      { path: 'survival', component: SurvivalComponent},
      { path: 'clubs', component: ClubsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
