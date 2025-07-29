# autodefensa.py
import hashlib, os

def verificacion_integridad():
    with open("index.html", "rb") as f:
        data = f.read()
        hash_valido = "9c48f..."  # SHA-512 predefinido
        return hashlib.sha512(data).hexdigest() == hash_valido

if not verificacion_integridad():
    os.system("curl https://ipfs.io/ipfs/QmCodeBackup > index.html")
