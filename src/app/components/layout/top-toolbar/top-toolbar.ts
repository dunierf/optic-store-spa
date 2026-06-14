import { Component } from '@angular/core';

// Components
import { TopMenu } from "../top-menu/top-menu";
import { TopRight } from '../top-right/top-right';
import { Logo } from '../logo/logo';

@Component({
  selector: 'app-top-toolbar',
  imports: [
    TopMenu,
    TopRight,
    Logo
  ],
  templateUrl: './top-toolbar.html',
  styleUrl: './top-toolbar.css',
})
export class TopToolbar {

}
