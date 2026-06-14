import { Component, OnInit, signal } from '@angular/core';

// Models
import { Product } from '../../../data/products';

// Data
import { products } from '../../../data/products';

// Components
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-product-list-home-page',
  imports: [
    ProductList
  ],
  templateUrl: './product-list-home-page.html',
  styleUrl: './product-list-home-page.css',
})
export class ProductListHomePage {
  
  products = signal<Product []> (products);

}
