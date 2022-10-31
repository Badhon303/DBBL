/* eslint-disable security/detect-non-literal-regexp */
const CryptoJS = require('crypto-js');
const config = require('../config/config');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

const encryptResponsePayload = (payload) => {
  payload = JSON.stringify(payload);
  const ciphertext = CryptoJS.AES.encrypt(payload, config.blockchain.seedPhrase).toString();
  console.log(`Encrypted payload:${ciphertext}`);
  return ciphertext;
};

const decryptCertificatePayload = (req, res, next) => {
  const bytes = CryptoJS.AES.decrypt(req.body.data, config.blockchain.seedPhrase);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);

  delete req.body['data'];
  req.body = JSON.parse(originalText);
  next();
};

// const filterRequestBody = async (req, res, next) => {
//   req.body = JSON.parse(JSON.stringify(req.body));
//   for (let key in req.body) {
//     if (req.body[key] === null || req.body[key][0] == null) {
//       req.body[key] = '';
//     }
//   }

//   next();
// };

const filterRequestBody = async (req, res, next) => {
  req.body = JSON.parse(JSON.stringify(req.body));
  req.body = JSON.stringify(req.body);

  next();
};

const checkAuthentication = (req, res, next) => {
  if (req.headers.authorization.split(' ')[1] != config.jwt.token) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized to perform this action');
  }

  next();
};

module.exports = {
  encryptResponsePayload,
  decryptCertificatePayload,
  filterRequestBody,
  checkAuthentication,
};
