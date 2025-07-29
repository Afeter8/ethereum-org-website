// Integración Ethereum (usando ethers.js)
const { ethers } = require('ethers');

const nodosEthereum = {
  infura: 'https://mainnet.infura.io/v3/TU_API_KEY',
  alchemy: 'https://eth-mainnet.g.alchemy.com/v2/TU_API_KEY',
  flashbots: 'https://rpc.flashbots.net',
  cloudflare: 'https://cloudflare-eth.com',
  local: 'http://127.0.0.1:8545'
};

async function conectarNodos() {
  for (const [nombre, url] of Object.entries(nodosEthereum)) {
    try {
      const provider = new ethers.JsonRpcProvider(url);
      const block = await provider.getBlockNumber();
      console.log(`✅ Nodo ${nombre} conectado | Bloque actual: ${block}`);
    } catch (error) {
      console.warn(`❌ Nodo ${nombre} falló: ${error.message}`);
    }
  }
}

conectarNodos();
