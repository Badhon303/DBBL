const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const publishCertificate = {
  body: Joi.object().keys({
    id: Joi.string().required(),
    customerId: Joi.string().required(),
    emailAddress: Joi.string().email(),
    fullName: Joi.string(),
    fatherName: Joi.string(),
    motherName: Joi.string(),
    villageOrHouse: Joi.string().allow(''),
    postOffice: Joi.string().allow(''),
    policeStation: Joi.string().allow(''),
    district: Joi.string().allow(''),
    accountNumber: Joi.string().allow(''),
    accountTitle: Joi.string().allow(''),
    accountType: Joi.string().allow(''),
    accountOpenDate: Joi.string().allow(''),
    currency: Joi.string().allow(''),
    balance: Joi.string().allow(''),
    balanceInWord: Joi.string().allow(''),
  }),
};

const getCustomerInfo = {
  params: Joi.object().keys({
    id: Joi.number().required(),
  }),
};

const verifyCertificate = {
  params: Joi.object().keys({
    txHash: Joi.string().required(),
  }),
};

const uploadProfilePhoto = {
  params: Joi.object().keys({
    certificateId: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  publishCertificate,
  getCustomerInfo,
  verifyCertificate,
  uploadProfilePhoto,
};
