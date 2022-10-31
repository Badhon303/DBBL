const Dbbl = artifacts.require('Dbbl')

module.exports = async function (deployer) {
  // await deployProxy(Main, [], { deployer, initializer: "initialize" });
  deployer.deploy(Dbbl)
}
