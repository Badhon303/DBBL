const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { dbblService, userService } = require('../services');
const { encryptResponsePayload, decryptCertificatePayload } = require('../middlewares/crypto');

const publishCertificate = catchAsync(async (req, res) => {
  req.body.id = Math.floor(100000 + Math.random() * 900000000);

  const publishedCertificate = await dbblService.publishCertificate(req.body);

  res.status(httpStatus.CREATED).json({
    status: 'success',
    txHash: publishedCertificate,
  });
});

const getCustomerInfo = catchAsync(async (req, res) => {
  const customerId = req.params.id;

  const customerDetails = await dbblService.getCustomerInfo(customerId);

  res.status(httpStatus.OK).json({
    status: 'success',
    customerInfo: customerDetails,
  });
});

const verifyCertificateWithTxHash = catchAsync(async (req, res) => {
  const certificateData = await dbblService.verifyWithTxHash(req.params.txHash);

  res.status(httpStatus.OK).json({
    status: 'success',
    data: certificateData,
  });
});

const getAllCertificateIds = catchAsync(async (req, res) => {
  const ids = await dbblService.getAllIds();

  if (!ids) {
    res.status(httpStatus.NOT_FOUND).send();
  }
  res.status(httpStatus.OK).send(ids);
});

const encrypt = catchAsync(async (req, res) => {
  const certificatePayload = encryptResponsePayload(req.body);
  console.log(`Encrypted message: ${certificatePayload}`);

  res.status(httpStatus.OK).json({
    status: 'success',
    data: certificatePayload,
  });
});

// @Desc    Upload profile photo
// @Route   PUT /v1/users/:certificateId/upload-profile-photo
// @Access  Private
const uploadProfilePhoto = catchAsync(async (req, res) => {
  if (req.files.length <= 0) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'No File found! Please upload your profile photo.');
  }

  const profilePhoto = req.files[0];

  await userService.deleteFileByPath(req.params.certificateId, 'profile-photo');

  const updatedCertificate = await dbblService.updateCertificateById(req.params.certificateId, {
    photo: profilePhoto.originalname,
  });

  if (!updatedCertificate) {
    throw new ApiError(httpStatus.NO_CONTENT, 'Failed to updload photo');
  }

  // await emailService.sendApprovalRequestToAdmin(config.email.adminEmail, updatedUser.nickName);
  // await emailService.notifyUserAfterRequest(updatedUser.email, updatedUser.nickName);

  res.status(httpStatus.OK).json({
    success: true,
    data: {
      data: profilePhoto.originalname,
    },
  });
});

module.exports = {
  publishCertificate,
  verifyCertificateWithTxHash,
  encrypt,
  getAllCertificateIds,
  uploadProfilePhoto,
  getCustomerInfo,
};
