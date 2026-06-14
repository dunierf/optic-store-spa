import { Component } from '@angular/core';

// Components
import { SearchBox } from '../search-box/search-box';

@Component({
  selector: 'app-after-top-toolbar-area',
  imports: [
    SearchBox
  ],
  templateUrl: './after-top-toolbar-area.html',
  styleUrl: './after-top-toolbar-area.css',
})
export class AfterTopToolbarArea {}
