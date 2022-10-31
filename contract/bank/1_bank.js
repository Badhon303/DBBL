const Bank = artifacts.require("Bank");

module.exports = async function (deployer) {
    // await deployProxy(Main, [], { deployer, initializer: "initialize" });
    deployer.deploy(Bank);
};