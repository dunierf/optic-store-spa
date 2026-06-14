import { Component } from '@angular/core';

// Components
import { ProductListHomePage } from '../../ui/product-list-home-page/product-list-home-page';
import { ProductList } from "../../ui/product-list/product-list";

@Component({
  selector: 'app-home-page',
  imports: [
    ProductListHomePage,
    ProductList
],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
