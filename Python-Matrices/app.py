def agregar_persona(personas):
    nombre = input("Ingrese el nombre de la persona: ")
    apellido = input("Ingrese el apellido de la persona: ")
    dni = input("Ingrese el DNI de la persona: ")
    telefonos = []

    while True:
        telefono = input("Ingrese el teléfono de la persona: ")
        telefonos.append(telefono)
        continuar = input("¿Desea agregar otro teléfono? (S/N): ").upper()
        if continuar == "N":
            break

    personas.append([nombre, apellido, dni, telefonos])

def mostrar_personas(personas):
    print("Lista de personas registradas:")
    for idx, persona in enumerate(personas, 1):
        print(f"Persona {idx}:")
        print(f"Nombre: {persona[0]}")
        print(f"Apellido: {persona[1]}")
        print(f"DNI: {persona[2]}")
        print("Teléfonos:")
        for telefono in persona[3]:
            print(f"  - {telefono}")
        print("---")

def main():
    personas = []
    while True:
        agregar_persona(personas)
        seguir = input("¿Desea agregar otra persona? (S/N): ").lower()
        if seguir != "s":
            break

    mostrar_personas(personas)

if __name__ == "__main__":
    main()
