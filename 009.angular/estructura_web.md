## CREACIÓN DE RUTAS
1. en el archivo app.routes.ts hay que crear las rutas, ejemplo de ruta:
export const routes: Routes = [
    {
        path: 'restaurante-listado',
        component: RestaurantListComponent
    },
    {
        path: 'restaurante-formulario',
        component: RestaurantFormComponent
    }
]
2. En el app.component.html Utilizar ROUTER-OUTLET
Permite a Angular incrustar el componente asociado a la ruta actual
<router-outlet></router-outlet>
hay que ponerlo en app.component.html

### LAYOUT
    es la estructura de una web:
    barra fija de navegación
    <router-outlet></router-outlet>
    footer fijo
### Barra de navegación (NAVBAR)
Copiamos la barra de navegación que ya está hecha y le ajustamos los enlaces
https://getbootstrap.com/docs/5.3/components/navbar/#how-it-works

Se añade en el app.component.html