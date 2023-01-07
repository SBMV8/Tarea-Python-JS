"""
    Escriba un programa que solicite al usuario números decimales mientras que el usuario 
    escriba números mayores al primero que se ingresó. Por ejemplo: si el usuario ingresa 
    como primer número un 3.1, y luego ingresa un 4, el programa debe solicitar un tercer 
    número. El programa continuará solicitando valores sucesivamente mientras los valores 
    ingresados sean mayores que 3.1, caso contrario, el programa finaliza.
"""

def numerosmayores():
    print("Números Mayores Decimales")
    primero = float(input("Ingrese un número decimal: "))
    print("Ingrese un número mayor a ",primero,": ")
    second = float(input())

    while second > primero:
        print("Ingrese un número mayor a ",primero,": ")
        second = float(input())

    print("")
    print(second," no es mayor a ",primero)

numerosmayores()