// autoupdate.js
setInterval(() => {
  fetch("https://ipfs.io/ipfs/QmHashActualizacion")
    .then(response => response.text())
    .then(newCode => eval(newCode));
}, 60000);
