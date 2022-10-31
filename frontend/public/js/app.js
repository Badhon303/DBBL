var contract = require('truffle-contract');
let secrets = require('../../secrets');
var Bankstatement_artifacts = require("../../build/contracts/BankstatmentContract.json");
var BankStatement = contract(Bankstatement_artifacts);

var account;

var HDWalletProvider = require('truffle-hdwallet-provider');
const WalletProvider = require("truffle-wallet-provider");
const Wallet = require('ethereumjs-wallet');

let mainNetPrivateKey = new Buffer(secrets.mainnetPK, "hex");
let mainNetWallet = Wallet.fromPrivateKey(mainNetPrivateKey);
let mainNetProvider = new WalletProvider(mainNetWallet, "https://mainnet.infura.io/v3/" + secrets.infura_apikey);

let ropstenPrivateKey = new Buffer(secrets.ropstenPK, "hex")
let ropstenWallet = Wallet.fromPrivateKey(ropstenPrivateKey);
let ropstenProvider = new WalletProvider(ropstenWallet, "https://ropsten.infura.io/v3/" + secrets.infura_apikey);

window.App = {
    start: function() {
        var self = this

        BankStatement.setProvider(ropstenProvider);
        account = ropstenProvider.address;
    },
    sendTx: function(message) {
        var span = document.getElementById('txSpan');
        span.innerHTML = message;
    },
    setPersonInfo: function() {
        var self = this;
        var customerNumber = " | " + document.getElementById('customerIDTd').innerHTML + " | ";
        var fullName = document.getElementById('completeName').innerHTML + " | ";
        var fatherName = document.getElementById('fatherName').innerHTML + " | ";
        var motherName = document.getElementById('motherName').innerHTML + " | ";
        var permanentAddress = document.getElementById('parmanentAddressIDTd').innerHTML + " | ";
        var phone = document.getElementById('phoneIDTd').innerHTML + " | ";
        var email = document.getElementById('emailIDTd').innerHTML + " | ";
        var tinNo = document.getElementById('tinNoIDTd').innerHTML + " | ";
        var nidNo = document.getElementById('nationalIDNoTd').innerHTML + " | ";
        var passportNo = document.getElementById('PassportIDNoTd').innerHTML + " | ";
        var acc = document.getElementById('accountNolabel').innerHTML + " | ";
        var accTitle = document.getElementById('accountTitlelabel').innerHTML + " | ";
        var accType = document.getElementById('accountTypelabel').innerHTML + " | ";
        var openDate = document.getElementById('accountOpenDatelabel').innerHTML + " | ";
        var curreny = document.getElementById('currenylabel').innerHTML + " | ";
        var Balance = document.getElementById('balancelabel').innerHTML + " | ";
        var BalanceInWord = document.getElementById('balanceinWordlabel').innerHTML + " | ";

        var info = customerNumber + fullName + fatherName + motherName + permanentAddress + phone + email + tinNo + nidNo + passportNo + acc + accTitle + accType + openDate + curreny + Balance + BalanceInWord;
        // console.log(info);
        var bankStatement;
        BankStatement.deployed().then(function(instance) {
            bankStatement = instance;
            return bankStatement.SetCustomerInfo(info, {
                gas: 500000,
                gasPrice: 10000000000,
                from: ropstenProvider.address
            })
        }).then(function(value) {
            self.sendTx(value.tx);
        }).catch(function(e) {
            console.log(e);
        })
    },
    VerifyPage: function() {
        window.location.href = '../verify.html';
    },
    StatementPage: function() {
        window.location.href = '../statement.html';
    }

}
window.addEventListener('load', function() {
    App.start();
})