// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ActivacionIA {
    address public propietario;
    bool public activado;

    constructor() {
        propietario = msg.sender;
        activado = false;
    }

    modifier soloPropietario() {
        require(msg.sender == propietario, "No autorizado");
        _;
    }

    function activarSistema() public soloPropietario {
        activado = true;
    }

    function desactivarSistema() public soloPropietario {
        activado = false;
    }

    function estado() public view returns (bool) {
        return activado;
    }
}
