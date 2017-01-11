import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

import { 
  DetailComponent,
  CognitiveComponent,
  DataphorWebComponent,
  FSRComponent,
  HAAppComponent,
  HAPortalComponent,
  JingoAIComponent,
  OtherComponent,
  ProfileComponent 
} from './detail/index';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    CognitiveComponent,
    DataphorWebComponent,
    FSRComponent,
    HAAppComponent,
    HAPortalComponent,
    JingoAIComponent,
    OtherComponent,
    ProfileComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
