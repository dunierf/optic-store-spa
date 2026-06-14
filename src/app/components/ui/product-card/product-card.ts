import { Component, input } from '@angular/core';

// Models
import { Product } from '../../../data/products';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

  product = input.required<Product>();

}
