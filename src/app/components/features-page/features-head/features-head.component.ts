import { Component, OnInit } from '@angular/core';
import {FeaturesHeadText} from "../../../shared/enums/features-head-text.enum";

@Component({
  selector: 'app-features-head',
  templateUrl: './features-head.component.html',
  styleUrls: ['./features-head.component.scss']
})
export class FeaturesHeadComponent implements OnInit {

  featuresHeadHeaderText: string = FeaturesHeadText.featuresHeadHeaderText;
  featuresHeadMainText: string = FeaturesHeadText.featuresHeadMainText;

  constructor() { }

  ngOnInit(): void {
  }

}
