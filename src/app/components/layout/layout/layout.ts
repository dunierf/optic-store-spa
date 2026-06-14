import { Component } from '@angular/core';

// Components
import { TopToolbar } from '../top-toolbar/top-toolbar';
import { AfterTopToolbarArea } from '../after-top-toolbar-area/after-top-toolbar-area';
import { ContentArea } from '../content-area/content-area';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-layout',
  imports: [
    TopToolbar,
    AfterTopToolbarArea,
    ContentArea,
    Footer
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
