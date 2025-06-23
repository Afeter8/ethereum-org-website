from web3 import Web3 import hashlib import time

Conexión al nodo Ethereum (puede ser Infura, Alchemy o un nodo Geth propio)

web3 = Web3(Web3.HTTPProvider("https://mainnet.infura.io/v3/TU_TOKEN_INFURA"))

Dirección del contrato ya desplegado (modifica con la real)

contract_address = Web3.to_checksum_address("0xTU_CONTRATO")

ABI del contrato ProteccionFGME (resumen para llamadas públicas)

contract_abi = [ { "inputs": [ {"internalType": "bytes32", "name": "_hash", "type": "bytes32"} ], "name": "verificarHash", "outputs": [ {"internalType": "bool", "name": "", "type": "bool"} ], "stateMutability": "view", "type": "function" } ]

contract = web3.eth.contract(address=contract_address, abi=contract_abi)

def obtener_hash_sha512(archivo): with open(archivo, 'rb') as f: contenido = f.read() return Web3.to_hex(Web3.keccak(text=hashlib.sha512(contenido).hexdigest()))

def verificar_archivo(archivo): hash_codigo = obtener_hash_sha512(archivo) resultado = contract.functions.verificarHash(hash_codigo).call() print(f"\n[Verificación FGME] Archivo: {archivo}") print(f"Hash: {hash_codigo}") print(f"Resultado: {'✔️ Válido' if resultado else '❌ No registrado'}")

Ejemplo de uso

if name == "main": while True: verificar_archivo("inmutable.py")  # o inmutable.html, etc. time.sleep(60)  # Cada 60 segundos

