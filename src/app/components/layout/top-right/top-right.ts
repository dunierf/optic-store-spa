import { Component } from '@angular/core';

// Components
import { Cart } from '../cart/cart';
import { HamburgerMenu } from '../hamburger-menu/hamburger-menu';

@Component({
  selector: 'app-top-right',
  imports: [
    Cart,
    HamburgerMenu
  ],
  templateUrl: './top-right.html',
  styleUrl: './top-right.css',
})
export class TopRight {}
