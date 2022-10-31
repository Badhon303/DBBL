const express = require('express');
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');
const { decryptCertificatePayload, filterRequestBody, checkAuthentication } = require('../../middlewares/crypto');
const dbblValidation = require('../../validations/dbbl.validation');
const dbblController = require('../../controllers/dbbl.controller');
const { upload } = require('../../utils/fileUpload');

const router = express.Router();

// auth('publishCertificate'),

router.get('/verify/:txHash', validate(dbblValidation.verifyCertificate), dbblController.verifyCertificateWithTxHash);
router.get('/customer/:id', validate(dbblValidation.getCustomerInfo), dbblController.getCustomerInfo);
router.get('/ids', dbblController.getAllCertificateIds);
router.post('/publish', validate(dbblValidation.publishCertificate), dbblController.publishCertificate);

router
  .route('/:certificateId/upload-profile-photo')
  .put(validate(dbblValidation.uploadProfilePhoto), upload.array('profile-photo', 1), dbblController.uploadProfilePhoto);

// router.post('/getEncryptedMessage', dbblController.encrypt);

module.exports = router;
