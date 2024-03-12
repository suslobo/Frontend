## conectar formularios

angular--009-forms-bootstrap

* product-list
* product-detail
* product-form: creación y actualización

Objetivo: tener desarrollado un CRUD completo sobre productos
1. ng generate component product-list
2. ng generate component product-detail
3. enturar en app.routes.ts
4. router-outlet en app.component.html
5. copiar código: product-list.component.ts y product-list.component.html
    * agregar botones para llegar a product-form para crear (POST) y actualizar (PUT)
6. copiar codigo: product-detail.components.tx y product-detail.component.html
    * agregar botones para llegar a product-form para crear (POST) y actualizar (PUT)

## funcionalidad actualizar producto (PUT)

1. capturar el id (1,2,3...) de la URL utilizando activatedRoute de forma igual al product-detail
2. una vez capturado el id, si existe, entonces hacer un GET con httpClient para traer el producto por id, por ejemplo el producto 1
3. cargar los valores del producto en el formulario de productForm. de esta forma el formulario aparecerá con los valores del producto ya cargados para editarlos
4. en el método save, distinguir si existe id entonces hacer un update PUT, si no existe id entonces hacer un create POST
