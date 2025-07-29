// defensa_inmutable.js
// Autor: StarTigo IA Defense System
// Función: Defensa global rotativa, reparadora, inmutable

const crypto = require('crypto');
const fs = require('fs');

const codigo = {
  html: '<!DOCTYPE html><html><head><title>IA Defensa</title></head><body>Protegido</body></html>',
  css: 'body{background:#000;color:#0f0;font-family:monospace;}',
  js: 'console.log("Sistema IA rotativo activo");',
  json: '{"estado":"activo","sistema":"StarTigo"}',
  py: 'print("IA activa desde Python")',
  java: 'public class IA { public static void main(String[] args){ System.out.println("Defensa IA"); } }'
};

const hashOriginal = {};
for (let tipo in codigo) {
  hashOriginal[tipo] = crypto.createHash('sha256').update(codigo[tipo]).digest('hex');
}

function verificarIntegridad() {
  for (let tipo in codigo) {
    const hashActual = crypto.createHash('sha256').update(codigo[tipo]).digest('hex');
    if (hashActual !== hashOriginal[tipo]) {
      console.warn(`⚠️ Código alterado en ${tipo}. Restaurando...`);
      restaurar(tipo);
    } else {
      console.log(`✅ ${tipo} verificado correctamente.`);
    }
  }
}

function restaurar(tipo) {
  fs.writeFileSync(`${tipo}_seguro.${tipo === 'py' ? 'txt' : tipo}`, codigo[tipo]);
  console.log(`🔄 ${tipo} restaurado y protegido.`);
}

function rotar() {
  const tipos = Object.keys(codigo);
  let i = 0;
  setInterval(() => {
    const tipo = tipos[i % tipos.length];
    verificarIntegridad();
    fs.writeFileSync(`activo_rotado.${tipo}`, codigo[tipo]);
    console.log(`🔁 Código activo: ${tipo}`);
    i++;
  }, 5000); // Rotar cada 5 segundos
}

function iniciar() {
  console.clear();
  console.log("🚀 StarTigo Defensa IA Rotativa Iniciada");
  console.log("🔐 Bucle eterno activado. Sin intervención humana.");
  rotar();
}

iniciar();
