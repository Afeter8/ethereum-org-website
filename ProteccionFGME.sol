// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ProteccionFGME {
    address public propietario;
    mapping(bytes32 => bool) private hashesAutorizados;
    event HashRegistrado(bytes32 indexed hash, address indexed por);

    constructor() {
        propietario = msg.sender;
    }

    modifier soloFGME() {
        require(msg.sender == propietario, "No autorizado. Solo FGME puede modificar.");
        _;
    }

    function registrarHash(bytes32 _hash) external soloFGME {
        hashesAutorizados[_hash] = true;
        emit HashRegistrado(_hash, msg.sender);
    }

    function verificarHash(bytes32 _hash) external view returns (bool) {
        return hashesAutorizados[_hash];
    }
}
