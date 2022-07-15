import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { StatsComponent } from './components/stats/stats.component';
import { CliComponent } from './components/cli/cli.component';
import { CloudComponent } from './components/cloud/cloud.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturesPageComponent } from './components/features-page/features-page.component';
import { FeaturesHeadComponent } from './components/features-page/features-head/features-head.component';
import { FeaturesSubHeadComponent } from './components/features-page/features-sub-head/features-sub-head.component';
import { FeaturesMainComponent } from './components/features-page/features-main/features-main.component';
import { DocumentationPageComponent } from './components/documentation-page/documentation-page.component';
import { DocumentationHeadComponent } from './components/documentation-page/documentation-head/documentation-head.component';
import { DocumentationMainComponent } from './components/documentation-page/documentation-main/documentation-main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    StatsComponent,
    CliComponent,
    CloudComponent,
    LanguagesComponent,
    FooterComponent,
    FeaturesPageComponent,
    FeaturesHeadComponent,
    FeaturesSubHeadComponent,
    FeaturesMainComponent,
    DocumentationPageComponent,
    DocumentationHeadComponent,
    DocumentationMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
