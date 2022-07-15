import { Component, OnInit } from '@angular/core';
import {FeaturesMainText} from "../../../shared/enums/features-main-text.enum";

@Component({
  selector: 'app-features-main',
  templateUrl: './features-main.component.html',
  styleUrls: ['./features-main.component.scss']
})
export class FeaturesMainComponent implements OnInit {

  serverFeaturesMainText: string = FeaturesMainText.serverFeaturesMainText;
  networkFeaturesMainText: string = FeaturesMainText.networkFeaturesMainText;
  laptopFeaturesMainText: string = FeaturesMainText.laptopFeaturesMainText;
  databaseFeaturesMainText: string = FeaturesMainText.databaseFeaturesMainText;
  powerFeaturesMainText: string = FeaturesMainText.powerFeaturesMainText;
  uploadFeaturesMainText: string = FeaturesMainText.uploadFeaturesMainText;

  constructor() { }

  ngOnInit(): void {
  }

}
