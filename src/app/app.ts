import { Component, signal } from '@angular/core';

// Components
import { Layout } from './components/layout/layout/layout';


@Component({
  selector: 'app-root',
  imports: [
    Layout
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('optic-store-spa');
}
