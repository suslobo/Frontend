Algoritmo EstructuraControl_Mientras_2
	Escribir "Indique su edad"
	Leer edad
	Mientras edad < 18 Hacer
		Escribir "�Viene acompa�ado de un tutor? (S o N)"
		Leer respuesta
		Si respuesta = "S" Entonces
			edad = 18
		SINO
			escribir "No puede pasar sin compa��a con " edad " a�os"
			edad <- edad + 1
		FinSi
	Fin Mientras
	Si edad >=18 Entonces
		escribir "puede pasar"
	FinSi
FinAlgoritmo
