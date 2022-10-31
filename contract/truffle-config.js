const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
// const mnemonic = fs.readFileSync('.mnemonic').toString().trim();
const mnemonicPhrase = fs.readFileSync('.secret').toString().trim();
module.exports = {
  networks: {
    // development: {
    //   host: '192.168.72.99',
    //   port: 7545,
    //   network_id: '*', // Any network (default: none)
    // },
    // rinkeby: {
    //   provider: () =>
    //     new HDWalletProvider(
    //       mnemonic,
    //       `https://rinkeby.infura.io/v3/YOUR-PROJECT-ID`
    //     ),
    //   network_id: 4,
    //   gas: 4500000,
    //   confirmations: 2, // # of confs to wait between deployments. (default: 0)
    //   timeoutBlocks: 200, // # of blocks before a deployment times out(minimum/default: 50)
    // },
    besu: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: mnemonicPhrase,
          providerOrUrl: `http://115.127.24.188:8545`,
          numberOfAddresses: 10,
        }),
      network_id: "1337",
      gas: 999999999999999,
      gasPrice: 0,
      timeoutBlocks: 200,
    },
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: '0.8.1', // Fetch exact version from solc-bin (default: truffle'sversion)
    },
  },
};