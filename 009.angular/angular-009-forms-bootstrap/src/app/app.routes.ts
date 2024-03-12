import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
    // Listado de productos
    {
      path: '',
      redirectTo: '/product-list',
      pathMatch: 'full'
    },
    {
      path: 'product-list',
      component: ProductListComponent
    },
    // La pantalla de detalle de un solo producto
    {
      path: 'products/:id/detail',
      component: ProductDetailComponent
    },
]
