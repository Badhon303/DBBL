const { string } = require('joi');
const mongoose = require('mongoose');
// const validator = require('validator');
const { toJSON, paginate } = require('./plugins');

const dbblSchema = mongoose.Schema(
  {
    id: String,
    customerId: String,
    emailAddress: String,
    fullName: String,
    fatherName: String,
    motherName: String,
    villageOrHouse: String,
    postOffice: String,
    policeStation: String,
    district: String,
    accountNumber: String,
    accountTitle: String,
    accountType: String,
    accountOpenDate: String,
    currency: String,
    balance: String,
    balanceInWord: String,
    photo: String,
    transaction_hash: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

dbblSchema.plugin(toJSON);
dbblSchema.plugin(paginate);

/**
 * @typedef Dbbl
 */
const Dbbl = mongoose.model('Dbbl', dbblSchema);

module.exports = Dbbl;
