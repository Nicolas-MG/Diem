import { Routes } from '@angular/router';
import { LayoutComponent } from "@shared/components/layout/layout.component";



export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./domains/products/pages/list/list.component')
            },
            {
                path: 'about',
                loadComponent: () => import('./domains/info/pages/about/about.component')
            }
                  ]
    },
    {
        path: '**',
        loadComponent: () => import('./domains/info/pages/not-found/not-found.component')
    }
];
