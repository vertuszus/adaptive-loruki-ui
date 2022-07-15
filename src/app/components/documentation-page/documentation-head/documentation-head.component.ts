import { Component, OnInit } from '@angular/core';
import {DocsHeadText} from "../../../shared/enums/docs-head-text.enum";

@Component({
  selector: 'app-documentation-head',
  templateUrl: './documentation-head.component.html',
  styleUrls: ['./documentation-head.component.scss']
})
export class DocumentationHeadComponent implements OnInit {

  docsHeadHeaderText: string = DocsHeadText.docsHeadHeaderText;
  docsHeadMainText: string = DocsHeadText.docsHeadMainText;

  constructor() { }

  ngOnInit(): void {
  }

}
