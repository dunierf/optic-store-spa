import { Component } from '@angular/core';

// Components
import { TopToolbar } from '../top-toolbar/top-toolbar';
import { Ads } from '../ads/ads';
import { ContentArea } from '../content-area/content-area';

@Component({
  selector: 'app-layout',
  imports: [
    TopToolbar,
    Ads,
    ContentArea
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
