import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Models
import { MenuItem } from '../../../data/menu'

// Menu items
import { items } from '../../../data/menu'

@Component({
  selector: 'app-top-menu',
  imports: [
    RouterLink
  ],
  templateUrl: './top-menu.html',
  styleUrl: './top-menu.css',
})
export class TopMenu {

  items: MenuItem[] = items;

}
