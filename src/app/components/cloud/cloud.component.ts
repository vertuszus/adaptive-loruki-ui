import { Component, OnInit } from '@angular/core';
import {CloudText} from "../../shared/enums/cloud-text.enum";

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.scss']
})
export class CloudComponent implements OnInit {

  cloudHeaderText = CloudText.cloudHeaderText;
  cloudText: string = CloudText.cloudText;

  constructor() { }

  ngOnInit(): void {
  }

}
