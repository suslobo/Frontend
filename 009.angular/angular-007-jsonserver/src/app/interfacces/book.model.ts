export interface Book {
    id: number;
    title: string;
    sinopsis: string;
    release: Date;
    numPages: number;
    photo: string;
    price: number;
    // asociaciones con otras Interfaces:angular--007-jsonserver/src/app/interfacces/book.model.ts
    authorId: number; // many to one (varios libros escritos por el mismo autor)
    categories: number[]; // many to many (tres libros que son novelas)
}