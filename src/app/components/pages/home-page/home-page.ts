import { Component } from '@angular/core';

// Components
import { ProductListHomePage } from '../../ui/product-list-home-page/product-list-home-page';

@Component({
  selector: 'app-home-page',
  imports: [
    ProductListHomePage
],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
