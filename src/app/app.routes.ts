import { Routes } from '@angular/router';

// Pages
import { HomePage } from './components/pages/home-page/home-page';
import { AboutPage } from './components/pages/about-page/about-page';
import { ProductsPage } from './components/pages/products-page/products-page';
import { FaqsPage } from './components/pages/faqs-page/faqs-page';
import { ContactPage } from './components/pages/contact-page/contact-page';

export const routes: Routes = [
    {
        path: ':lang(en|es)',
        children: [
            {
                path: '',
                component: HomePage,
                pathMatch: 'full'
            },

            // English
            {
                path: 'about',
                component: AboutPage
            },
            {
                path: 'products',
                component: ProductsPage
            },
            {
                path: 'faqs',
                component: FaqsPage
            },
            {
                path: 'contact',
                component: ContactPage
            },        

            // Spanish
            {
                path: 'nosotros',
                component: AboutPage
            },
            {
                path: 'productos',
                component: ProductsPage
            },
            {
                path: 'faqs',
                component: FaqsPage
            },
            {
                path: 'contacto',
                component: ContactPage
            }
        ]
  },
  { 
    path: '**', 
    redirectTo: 'es' 
  }
];
