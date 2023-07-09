// SPDX-License-Identifier: MIT
pragma experimental ABIEncoderV2;
pragma solidity >=0.4.25 <0.9.0;

import "./Types.sol";
import "./UtilityFunction.sol";


contract Banks {
    address[] internal bankList;
    mapping(address => Types.Bank) internal banks;

    // Events

    event BankAdded(address id_, string name, string email, string ifscCode);
    event BankUpdated(address id_, string name, string email);
    event BankActivated(address id_, string name);
    event BankDeactivated(address id_, string name);

    // Modifiers


    modifier isValidBank(address id_) {
        require(banks[id_].id_ != address(0), "Bank not found");
        require(banks[id_].id_ == id_, "Bank not found");
        require(
            banks[id_].status == Types.BankStatus.Active,
            "Bank is not active"
        );
        _;
    }

    // Contract Methods


    function getallbanks(uint256 pageNumber)
        internal
        view
        returns (uint256 totalPages, Types.Bank[] memory)
    {
        require(pageNumber > 0, "PN should be > 0");
        (
            uint256 pages,
            uint256 pageLength_,
            uint256 startIndex_,
            uint256 endIndex_
        ) = Helpers.getIndexes(pageNumber, bankList);

        Types.Bank[] memory banksList_ = new Types.Bank[](pageLength_);
        for (uint256 i = startIndex_; i < endIndex_; i++)
            banksList_[i] = banks[bankList[i]];
        return (pages, banksList_);
    }

    function getsinglebank(address id_)
        internal
        view
        returns (Types.Bank memory)
    {
        require(id_ != address(0), "Bank Id Empty");
        return banks[id_];
    }

 
    function addbank(Types.Bank memory bank_) internal {
        require(banks[bank_.id_].id_ == address(0), "Bank exists");

        banks[bank_.id_] = bank_;
        bankList.push(bank_.id_);
        emit BankAdded(bank_.id_, bank_.name, bank_.email, bank_.ifscCode);
    }

  
    function updatebank(
        address id_,
        string memory email_,
        string memory name_
    ) internal {
        require(banks[id_].id_ != address(0), "Bank not found");

        banks[id_].name = name_;
        banks[id_].email = email_;
        emit BankUpdated(id_, name_, email_);
    }

 // true if active false deactivate
    function activatedeactivatebank(address id_, bool makeActive_)
        internal
        returns (Types.BankStatus)
    {
        require(banks[id_].id_ != address(0), "Bank not found");

        if (makeActive_ && banks[id_].status == Types.BankStatus.Inactive) {
            banks[id_].status = Types.BankStatus.Active;
            emit BankActivated(id_, banks[id_].name);

            // Updating in common list
            return Types.BankStatus.Active;
        } else if (
            !makeActive_ && banks[id_].status == Types.BankStatus.Active
        ) {
            banks[id_].status = Types.BankStatus.Inactive;
            emit BankDeactivated(id_, banks[id_].name);

            // Updating in common list
            return Types.BankStatus.Inactive;
        } else {
            // Already it is whas it is
            return banks[id_].status;
        }
    }

    function updatekyccount(address id_) internal {
        require(id_ != address(0), "Bank not found");
        banks[id_].kycCount++;
    }
}