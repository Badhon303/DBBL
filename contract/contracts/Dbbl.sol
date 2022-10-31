// SPDX-License-Identifier: GPL-3.0


pragma solidity 0.8.1;

contract Dbbl {

    struct Certificate_payload {
        uint256 id;
        string customerId;
        string emailAddress;
        string fullName;
        string fatherName;
        string motherName;
        string villageOrHouse;
        string postOffice;
        string policeStation;
        string district;
        string accountNumber;
        string accountTitle;
        string accountType;
        string accountOpenDate;
        string currency;
        string balance;
        string balanceInWord;
    }

    uint256[] published_certificate_ids;

    mapping (uint256 => Certificate_payload) internal certificates;

    mapping (uint256 => bool) internal certificate_is_published;

    event CertificatePublished(uint256 indexed certificate_id, address owner, uint256 date);

    modifier isCertificateIdAvailable(uint256 certificate_id) {
        require(
            !certificate_is_published[certificate_id],
            "A certificate is already published with this Id!"
        );
        _;
    }


    function publishCertificate(uint256 certificateId, Certificate_payload memory certificatePayload) external isCertificateIdAvailable(certificateId) {

        certificates[certificateId].id = certificateId;
        certificates[certificateId].customerId = certificatePayload.customerId;
        certificates[certificateId].emailAddress = certificatePayload.emailAddress;
        certificates[certificateId].fullName = certificatePayload.fullName;
        certificates[certificateId].fatherName = certificatePayload.fatherName;
        certificates[certificateId].motherName = certificatePayload.motherName;
        certificates[certificateId].villageOrHouse = certificatePayload.villageOrHouse;
        certificates[certificateId].postOffice = certificatePayload.postOffice;
        certificates[certificateId].policeStation = certificatePayload.policeStation;
        certificates[certificateId].district = certificatePayload.district;
        certificates[certificateId].accountNumber = certificatePayload.accountNumber;
        certificates[certificateId].accountTitle = certificatePayload.accountTitle;
        certificates[certificateId].accountType = certificatePayload.accountType;
        certificates[certificateId].accountOpenDate = certificatePayload.accountOpenDate;
        certificates[certificateId].currency = certificatePayload.currency;
        certificates[certificateId].balance = certificatePayload.balance;
        certificates[certificateId].balanceInWord = certificatePayload.balanceInWord;
        
        

        published_certificate_ids.push(certificateId);
        certificate_is_published[certificateId] = true;

        emit CertificatePublished(certificateId, msg.sender, block.timestamp);
    }
    
    function getCertificateDetailsById(uint256 certificateId) public view returns (Certificate_payload memory) {
        return certificates[certificateId];
    }

    function isCertificateVerified(uint256 certificateId) public view returns (bool) {
        return certificate_is_published[certificateId];
    }

    function getPublishedCertificateIds() public view returns (uint256[] memory) {
        return published_certificate_ids;
    }

    function getTotalPublishedCerticates() public view returns (uint256) {
        return published_certificate_ids.length;
    }

}
