import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {FeaturesPageComponent} from "./components/features-page/features-page.component";
import {DocumentationPageComponent} from "./components/documentation-page/documentation-page.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'features', component: FeaturesPageComponent},
  {path: 'docs', component: DocumentationPageComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
