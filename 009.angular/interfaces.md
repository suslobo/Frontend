## INTERFAZ (es la estructura de lo que quieras crear)

utilizamos las interfaces para definir la estructura que tendrá un nuevo tipo de dato con creto como por ejemplo: Producto, Casa, Curso, Empresa, Coche 

interface Producto {
    // atributos
    id: number;
    title: string;
    color: string;
    price: number;
}

cada atributo en un interface podría corresponder a una columna en una tabla de base de datos.

## ANGULAR
El Navegador llama a -->
1. HTML de un componente -->
2. Clase de typescript del mismo componente -->
3. Interfaces y clases que están repartidas por el proyecto