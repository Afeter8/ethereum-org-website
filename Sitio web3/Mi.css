// Smart contract básico para migración (Ethereum ejemplo)
function migrateTokens(address _user, uint256 _amount) public onlyAuthorized {
    require(balanceOf[_user] >= _amount, "Saldo insuficiente");
    balanceOf[_user] -= _amount;
    migrated[_user] += _amount;
}
