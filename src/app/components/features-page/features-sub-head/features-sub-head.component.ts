import { Component, OnInit } from '@angular/core';
import {FeaturesHeadText} from "../../../shared/enums/features-head-text.enum";
import {FeaturesSubHeadText} from "../../../shared/enums/features-sub-head-text.enum";

@Component({
  selector: 'app-features-sub-head',
  templateUrl: './features-sub-head.component.html',
  styleUrls: ['./features-sub-head.component.scss']
})
export class FeaturesSubHeadComponent implements OnInit {

  featuresSubHeadHeaderText: string = FeaturesSubHeadText.featuresSubHeadHeaderText;
  featuresSubHeadMainText: string = FeaturesSubHeadText.featuresSubHeadMainText;

  constructor() { }

  ngOnInit(): void {
  }

}
