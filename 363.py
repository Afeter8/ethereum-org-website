from web3 import Web3

web3 = Web3(Web3.HTTPProvider("https://mainnet.infura.io/v3/TU_TOKEN"))
contract = web3.eth.contract(address="0xTU_CONTRATO", abi=ABI_DEL_CONTRATO)

def verificar_hash(hash_code):
    return contract.functions.verificarHash(hash_code).call()
