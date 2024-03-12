import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  holaMundo(): string{
    return "Hola mundo";
  }
  // get para obtener los datos
  obtenerProducto1(): Observable<Product> {
    return this.httpClient.get<Product>('https://fakestoreapi.com/products/1');
  }
  // obtener todos los productos: get para obtener los datos
  findAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products');
  }

  // obtener un producto por su id como parámetro: get para obtener los datos
  findById(id: number | string) {
    return this.httpClient.get<Product>(`https://fakestoreapi.com/products/${id}`);
  }
  

  // Método create para enviar un producto al API REST


  // esto crearía un nuevo producto en base de datos
  // post para enviar datos al servidor

  create(product: Product) {
    return this.httpClient.post<Product>('https://fakestoreapi.com/products', product); // estamos pasando el objeto producto
  }

  // Método para actualizar un producto en el API REST
  update(id: number | string, product: Product): Observable<Product> {
    return this.httpClient.put<Product>('https://fakestoreapi.com/products/' + id, product);
  }

  deleteById(id: number | string) {
    return this.httpClient.delete('https://fakestoreapi.com/products/' + id);
  }
}
