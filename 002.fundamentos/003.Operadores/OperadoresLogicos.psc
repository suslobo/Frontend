Algoritmo OperadoresLogicos
	
	precio <- 10 
	
	// Boolean
	esBarato <- precio < 30 // Verdadero o Falso
	
	// Opci�n 1: en una misma l�nea comparaciones y conjunci�n
	// Operador Y, AND, ampersand
	// Verdadero solo si ambas son verdadero
	// Verdadero Y Verdadero = Verdadero
	// Falso Y Verdadero = Falso
	// Verdadero Y Falso = Falso
	// Falso Y Falso = Falso
	esNormal <- precio >= 30 Y precio <= 60 // Verdadero o Falso
	
	// Opci�n 2: separar las condiciones en variables con nombres descriptivos
	esMayorIgual30 <- precio >= 30
	esMenorIgual60 <- precio <= 60
	esNormal <- esMayorIgual30 Y esMenorIgual60
	Escribir "Precio es normal: ", esNormal
	
	
	// Disyunci�n: O, OR, ||. Es m�s flexible que AND
	// Verdadero si una de las dos es Verdadero
	// Verdadero O Verdadero = Verdadero
	// Verdadero O Falso = Verdadero
	// Falso O Verdadero = Verdadero
	// Falso O Falso = Falso
	edad = 17
	vieneConTutor = Verdadero
	
	puedeEntrar <- edad >= 18 O vieneConTutor
	
	// Negaci�n: NO, not, !
	// Devuelve el contrario de un Boolean
	// !Verdadero el resultado ser� Falso
	// !Falso el resultado ser� Verdadero
	esAdulto = Verdadero
	noEsAdulto = !esAdulto
	Escribir noEsAdulto
	
	// Resumen:
	// Y: ambas cosas tienen que ser Verdadero
	// O: una cosa debe ser Verdadero
	// NO: invertir el valor
	
	
FinAlgoritmo
