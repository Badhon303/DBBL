const path = require('path');
const fs = require('fs').promises;
const httpStatus = require('http-status');
const Dbbl = require('../models/dbbl.model');
const ApiError = require('../utils/ApiError');
const { ethers } = require('ethers');
const config = require('../config/config');
const provider = new ethers.providers.JsonRpcProvider(`http://115.127.24.188:8545/`);

const publishCertificate = async (certificatePayload) => {
  const transaction_hash = await publishCertificateOnChain(certificatePayload);

  certificatePayload.transaction_hash = transaction_hash;

  const certificate = await Dbbl.create(certificatePayload);

  if (!certificate || !transaction_hash) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Error publishing certificate');
  }
  const certificateId = certificate._id;

  return { certificateId, transaction_hash };
};

const publishCertificateOnChain = async (certificatePayload) => {
  const privateKey = config.blockchain.privateKey;

  const contract_abi = JSON.parse(await fs.readFile(path.join(__dirname, '..', '..', 'abi.txt'), 'utf-8'));

  const signer = new ethers.Wallet(privateKey, provider);

  const contractAddress = config.blockchain.contractAddress;

  const smartContract = new ethers.Contract(contractAddress, contract_abi, provider);
  const contractWithWallet = smartContract.connect(signer);

  // console.log(certificatePayload);

  const tx = await contractWithWallet.publishCertificate(certificatePayload.id, certificatePayload, {
    gasLimit: '0x1fffffffffffff',
  });
  // console.log(`transaction receipt is: ${JSON.stringify(tx, null, 2)}`)
  // console.log(`transaction receipt is: ${tx.hash}`);
  await tx.wait();
  return tx.hash;
};

const verifyWithTxHash = async (transactionHash) => {
  const txReceiptFromBlockchain = await provider.getTransactionReceipt(transactionHash);
  const transactionHashOnBlockchain = txReceiptFromBlockchain.transactionHash;
  //   console.log(`transaction receipt is: ${JSON.stringify(txReceiptFromBlockchain.transactionHash, null, 2)}`);

  const certificateData = await Dbbl.findOne({ transaction_hash: transactionHash });
  //   console.log(`Certificate data from database: ${certificateData}`);
  const txIdFromDB = certificateData.transaction_hash;
  // console.log(txIdFromDB);

  if (transactionHashOnBlockchain === txIdFromDB) {
    return {
      status: 'success',
      txHash: transactionHashOnBlockchain,
      certificateData: certificateData,
    };
  } else if (transactionHashOnBlockchain != txIdFromDB) {
    return {
      status: 'failed to verify',
      txHash: 'undefined',
    };
  }
};

const getCustomerInfo = async (customerId) => {
  const customerDetails = await Dbbl.findOne({ customerId });
  return customerDetails;
};

const getAllIds = async () => {
  const privateKey = config.blockchain.privateKey;

  const contract_abi = JSON.parse(await fs.readFile(path.join(__dirname, '..', '..', 'abi.txt'), 'utf-8'));

  const signer = new ethers.Wallet(privateKey, provider);

  const contractAddress = config.blockchain.contractAddress;

  const smartContract = new ethers.Contract(contractAddress, contract_abi, provider);
  const contractWithWallet = smartContract.connect(signer);

  // console.log(certificatePayload);

  const tx = await contractWithWallet.getPublishedCertificateIds();
  // console.log(`transaction receipt is: ${JSON.stringify(tx, null, 2)}`)
  // console.log(`transaction receipt is: ${tx.hash}`);
  await tx.wait();
  return tx.hash;
};

const updateCertificateById = async (certificateId, certificatePayload) => {
  const certificate = await Dbbl.findByIdAndUpdate(certificateId, certificatePayload, { new: true });
  if (!certificate) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Error updating certificate');
  }
  return certificate;
};

module.exports = {
  publishCertificate,
  verifyWithTxHash,
  getAllIds,
  updateCertificateById,
  getCustomerInfo,
};
