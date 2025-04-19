// Variables globales
let web3;
let ipfs;
let contract;
let contractAddress = '0xYourSmartContractAddress';  // Dirección del contrato inteligente de defensa
let contractABI = [];  // ABI del contrato inteligente (lo cargaremos desde contractABI.json)

// Conectar con Web3
document.getElementById('conectarBtn').addEventListener('click', async () => {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.enable();  // Solicitar acceso a Metamask
      contract = new web3.eth.Contract(contractABI, contractAddress);
      alert('Conectado a la Blockchain');
    } catch (error) {
      console.error(error);
      alert('Error al conectar con la Blockchain');
    }
  } else {
    alert('Por favor, instala Metamask');
  }
});

// Conectar con IPFS
async function conectarIPFS() {
  ipfs = await Ipfs.create();
  console.log('Conectado a IPFS');
}

// Simulación de IA de defensa (detección de manipulación o robo)
function detectarManipulacion(texto) {
  // Simulación de detección de manipulación. Aquí se podrían usar modelos IA reales.
  const patronesMaliciosos = ['hack', 'attack', 'breach', 'steal'];
  return patronesMaliciosos.some(patron => texto.includes(patron));
}

// Activación de defensa automática en caso de detección
function activarDefensa() {
  document.getElementById('resultado').textContent = '¡Defensa Activada! Datos protegidos.';
  document.getElementById('resultado').style.color = 'red';

  // 1. Subir los datos a IPFS como defensa de copia descentralizada
  const datosAProteger = 'Información sensible detectada';
  subirAIPFS(datosAProteger);

  // 2. Registrar el evento en Blockchain usando un contrato inteligente
  registrarEventoBlockchain('Intento de robo detectado');
}

// Subir datos a IPFS
async function subirAIPFS(datos) {
  const fileBuffer = Buffer.from(datos, 'utf-8');
  const fileAdded = await ipfs.add(fileBuffer);
  const ipfsLink = `https://ipfs.io/ipfs/${fileAdded.path}`;
  console.log('Datos subidos a IPFS:', ipfsLink);
}

// Registrar evento en Blockchain
async function registrarEventoBlockchain(evento) {
  const accounts = await web3.eth.getAccounts();
  const result = await contract.methods.registrarEvento(evento).send({ from: accounts[0] });
  console.log('Evento registrado en Blockchain:', result.transactionHash);
}

// Verificar manipulación en la red
document.getElementById('verificarBtn').addEventListener('click', () => {
  const textoAProteger = 'Texto que podría ser robado o manipulado';
  if (detectarManipulacion(textoAProteger)) {
    activarDefensa();
  } else {
    document.getElementById('resultado').textContent = 'No se detectaron manipulaciones.';
    document.getElementById('resultado').style.color = 'green';
  }
});

// Iniciar IPFS cuando se cargue la página
conectarIPFS();
