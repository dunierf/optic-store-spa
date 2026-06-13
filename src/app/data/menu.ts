export interface MenuItem {
    label: string;
    label_es: string;
    path: string;
    path_es: string;
}

export const items: MenuItem[] = [
    {
        label: 'Home',
        label_es: 'Inicio',
        path: '',
        path_es: 'es/'
    },
    {
        label: 'About',
        label_es: 'Nosotros',
        path: 'en/about',
        path_es: 'es/nosotros'
    },
    {
        label: 'Products',
        label_es: 'Productos',
        path: 'en/products',
        path_es: 'es/productos'
    },
    {
        label: 'FAQs',
        label_es: 'FAQs',
        path: 'en/faqs',
        path_es: 'es/faqs'
    },
    {
        label: 'Contact',
        label_es: 'Contacto',
        path: 'en/contact',
        path_es: 'es/contacto'
    }
]