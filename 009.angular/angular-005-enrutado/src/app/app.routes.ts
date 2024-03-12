import { Routes } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantBookingComponent } from './restaurant-booking/restaurant-booking.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

// definir las rutas de la aplicación
// una array con objetos
/* opción 1: redirihir a un listado*/
// CASO ESPECIAL
// path: '',
// redirectTo: '/resutaurantes'
// pathMach: 'full' se pone para evitar que detecte cualquier url ya que todas las urls empiezan por cadena vacía

export const routes: Routes = [
   /* {
        path: '',
        redirectTo: '/restaurantes',
        pathMatch: 'full'
    },*/

    /* opción 2: crear un componente HOME que sea la pantalla de inicio
    ng generate component home */
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'restaurantes',
        component: RestaurantListComponent
    },
    {
        path: 'restaurantes/nuevo',
        component: RestaurantFormComponent
    },
    {
        path: 'restaurantes/:id/detalle',
        component: RestaurantDetailComponent
    },
    {
        path: 'restaurantes/:id/reservas',
        component: RestaurantBookingComponent
    },
    {
        path: 'not-found-404', 
        component: NotFoundComponent
    }
    /* opción en al que se conserva la ruta erronea
    {
        path: '**', // '**' ruta comodín atrapa cualquier url que se escriba
        redirectTo: '/not-founad-404'
    }*/
];
