/*
    Escriba un programa que solicite al usuario números decimales mientras que el usuario 
    escriba números mayores al primero que se ingresó. Por ejemplo: si el usuario ingresa 
    como primer número un 3.1, y luego ingresa un 4, el programa debe solicitar un tercer 
    número. El programa continuará solicitando valores sucesivamente mientras los valores 
    ingresados sean mayores que 3.1, caso contrario, el programa finaliza.
*/ 

document.write("Números Mayores Decimales",'<BR/>')
var primero = new Number()
var second = new Number()

primero = Number(prompt("Ingrese un número decimal: "))
second = Number(prompt("Ingrese un número mayor a",primero,": "))

do {
    second = Number(prompt("Ingrese un número mayor a",primero,": "))
} while (second > primero) 

document.write(second," no es mayor a ",primero)