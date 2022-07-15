import { Component, OnInit } from '@angular/core';
import {StatsText} from "../../shared/enums/stats-text.enum";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  statsHeaderText: string = StatsText.statsHeaderText;

  constructor() { }

  ngOnInit(): void {
  }

}
