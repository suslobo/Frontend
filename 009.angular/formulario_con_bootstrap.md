## instalar bootstrap

npm unisstall -g @angular/cli

npm install -g @angular/cli@17.2.0

ng new angular--009-forms-bootstrap --skip-git --style=css --routing=false --ssr=false

cd angular--009-foms-bootstrap

ng add @ng-bootstrap/ng-bootstrap

ng generate component product-form


## crear formulario con bootstrap

https://getbootstrap.com/docs/5.3/forms/form-control/

1. crear interfaces:
    * Manufacturer
    * Category
    * Product

2. product-form.component.ts hemos creado el FormGroupcon sus FormControl

3. product-form.component.html hemos creado el <form> de HTML con Bootstrap

4. product-form.component.ts método save para extraer los campos del formulario y 
crear un objeto Product y enviarlo a Backend con HttpClient método POST

5. db.json con productos para recibir la petición POST de HttpClient