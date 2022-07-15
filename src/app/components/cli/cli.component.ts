import { Component, OnInit } from '@angular/core';
import {CliText} from "../../shared/enums/cli-text.enum";

@Component({
  selector: 'app-cli',
  templateUrl: './cli.component.html',
  styleUrls: ['./cli.component.scss']
})
export class CliComponent implements OnInit {

  statsCliHeaderTextOne: string = CliText.statsCliHeaderTextOne;
  statsCliHeaderTextTwo: string = CliText.statsCliHeaderTextTwo;

  constructor() { }

  ngOnInit(): void {
  }

}
