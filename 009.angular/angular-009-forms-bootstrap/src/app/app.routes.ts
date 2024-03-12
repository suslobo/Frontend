import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ManufacturerListComponent } from './manufacturer-list/manufacturer-list.component';
import { ManufacturerDetailComponent } from './manufacturer-detail/manufacturer-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

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
  // La pantalla de creación de un nuevo producto
  {
    path: 'products/create',
    component: ProductFormComponent
  },
  // La pantalla de actualizar un prod existente
  {
    path: 'products/:id/update',
    component: ProductFormComponent
  },
  {
    path: 'manufacturers',
    component: ManufacturerListComponent
  },
  { // http://localhost:4200/manufacturers/20/detail
    path: 'manufacturers/:id/detail',
    component: ManufacturerDetailComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

// sudo rm -rf product-list