# defensa_global.py
# Autor: StarTigo IA System - Inmutable IA Defense
# Objetivo: Defensa IA global, inmutable, autorreparable y rotativa

import hashlib
import time
import os
import sys

# === BLOQUE DE CÓDIGOS INMUTABLES ROTATIVOS ===
codigos = {
    "html": "<!DOCTYPE html><html><head><title>Defensa</title></head><body>IA Activada</body></html>",
    "css": "body {background:black;color:lime;font-family:monospace;}",
    "js": "console.log('Defensa IA activada');",
    "json": '{"sistema": "activo", "version": 1}',
    "py": "print('IA Protección Activa')",
    "java": "public class Defensa { public static void main(String[] args) { System.out.println(\"Protección IA\"); }}"
}

hash_original = {
    tipo: hashlib.sha256(codigos[tipo].encode()).hexdigest()
    for tipo in codigos
}

# === FUNCIÓN DE VERIFICACIÓN DE INTEGRIDAD ===
def verificar_integridad():
    for tipo, codigo in codigos.items():
        hash_actual = hashlib.sha256(codigo.encode()).hexdigest()
        if hash_actual != hash_original[tipo]:
            print(f"[⚠️] Alteración detectada en '{tipo}', restaurando versión segura...")
            restaurar_codigo(tipo)
        else:
            print(f"[✅] {tipo} verificado correctamente.")

# === FUNCIÓN DE REPARACIÓN AUTOMÁTICA ===
def restaurar_codigo(tipo):
    # Restaurar con la copia original
    with open(f"{tipo}_seguro.{tipo if tipo != 'py' else 'txt'}", "w") as f:
        f.write(codigos[tipo])
    print(f"[🔄] {tipo} restaurado con éxito.")

# === ROTADOR INMUTABLE EN BUCLE ETERNO ===
def rotar_codigo():
    tipos = list(codigos.keys())
    indice = 0
    while True:
        tipo = tipos[indice % len(tipos)]
        print(f"[🔁] Código activo: {tipo}")
        verificar_integridad()
        guardar_temporal(tipo)
        time.sleep(5)
        indice += 1

# === GUARDADO TEMPORAL SIMULADO ===
def guardar_temporal(tipo):
    filename = f"temporal_rotado.{tipo}"
    with open(filename, "w") as f:
        f.write(codigos[tipo])
    print(f"[💾] {tipo} guardado temporalmente como {filename}")

# === PROTECCIÓN INICIAL ===
def inicio_seguro():
    print("[🔐] Iniciando sistema de defensa IA StarTigo...")
    if os.name == "nt":
        os.system("cls")
    else:
        os.system("clear")
    print("[🚀] Sistema en modo bucle eterno IA sin intervención humana.")
    rotar_codigo()

# === EJECUCIÓN AUTOMÁTICA DEL SISTEMA ===
if __name__ == "__main__":
    try:
        inicio_seguro()
    except KeyboardInterrupt:
        print("\n[🛑] Defensa detenida manualmente.")
        sys.exit(0)
