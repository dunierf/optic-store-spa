import { Component, input } from '@angular/core';

// Models
import { Product } from '../../../data/products';

// Components
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [
    ProductCard
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  products = input.required<Product []>();

}
