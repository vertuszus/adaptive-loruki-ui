import { Component, OnInit } from '@angular/core';
import {ShowcaseText} from "../../shared/enums/showcase-text.enum";
import {StatsText} from "../../shared/enums/stats-text.enum";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  showcaseHeader: string = ShowcaseText.showcaseHeader;
  showcaseText: string = ShowcaseText.showcaseText;
  statsHeaderText: string = StatsText.statsHeaderText;

  constructor() { }

  ngOnInit(): void {
  }

}
