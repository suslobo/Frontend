### enrutado y navegacion para el proyecto
ng new angular--005-enrutado --skip-git --style=css --routing=true --ssr=false
cd angular--005-enrutado
ng add @ng-bootstrap/ng-bootstrap

* Crear componentes:
ng generate component restaurant-list

ng generate component restaurant-detail

ng generate component restaurant-form

configuración rutas
routerLink

### enrutado a Detail

en ngOnInit de restaurant-detail se captura ese parametro id

para capturar el parametro se utiliza activateRouete en un objeto de angular

te devuelve los params como observable

el observanle forma parte de programación asíncrona/reactiva de rxjs

para utilizar n observable nos suscribimos con el método, suscribe y proporcionando una función flecha con el comportamiento o acciones que se deben ejecutar cuando se complete el observable y se emita un valor

### PRACTICAR ENRUTADO A DETAIL
1. crear un nuevo component: ng generate component restaurant-booking

2. crear una ruta para ese nuevo componente en app.routes.ts

hemos añadido     {
        path: 'restaurantes/:id/reservas',
        component: RestaurantBookingComponent
    }

3. crear un btón con routerLink desde restaurant-list que permita navegar pasando id como para

    <button class="btn btn-primary me-2" [routerLink]="['/restaurantes', restaurant.id, 'reservas']">Reservar</button>

4. capturar ide en el nuevo componente
export class RestaurantBookingComponent implements OnInit{

  constructor(private activatedRoudte: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoudte.params.subscribe(params => {
      console.log(params['id']);
      // utilizar el id para llamar a una clase servicio
      // para que traiga el restuarente / las reservas desde el BACKEND
    })
  }
}
### componente para rutas not found
cuando el usuario entre en una ruta que no exista, queremos motrar un componente que diga 404 not found o un mejsaje de error con un botón que diga Voler a inicio

1. crear un nuevo componente ng generate component not-found
2. crear una nueva ruta para ese nuevo compomente en app.routes.ts
3. crear el html del componente y verificar que si escribimos mal una url en el navegador, entonces se muesta este nuevo componente

## mostrar imagen restaurante
* imagen de portada en pagina de inicio
https://okacehikd.co/2000 
lo mejor es usar url
* imagen en restaurant-list como una nueva columna
* imagen en restaurna-detail junto a la