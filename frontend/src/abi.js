export const abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "id_",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "BankActivated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "id_",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "ifscCode",
				"type": "string"
			}
		],
		"name": "BankAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "id_",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "BankDeactivated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "id_",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "email",
				"type": "string"
			}
		],
		"name": "BankUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "id_",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "email",
				"type": "string"
			}
		],
		"name": "CustomerAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "id_",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "email",
				"type": "string"
			}
		],
		"name": "CustomerDataUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "reqId",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "customerId",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "bankId",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "enum Types.DataHashStatus",
				"name": "status",
				"type": "uint8"
			}
		],
		"name": "DataHashPermissionChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "id_",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "customerName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "dataHash",
				"type": "string"
			}
		],
		"name": "DataHashUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "reqId",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "bankName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "customerName",
				"type": "string"
			}
		],
		"name": "KycReRequested",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "reqId",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "bankName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "customerName",
				"type": "string"
			}
		],
		"name": "KycRequestAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "reqId",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "customerId",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "bankId",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "enum Types.KycStatus",
				"name": "status",
				"type": "uint8"
			}
		],
		"name": "KycStatusChanged",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "bankId_",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approve_",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "note_",
				"type": "string"
			}
		],
		"name": "actionOnKycRequest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "id_",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "makeActive_",
				"type": "bool"
			}
		],
		"name": "activateDeactivateBank",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "id_",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "ifscCode",
						"type": "string"
					},
					{
						"internalType": "uint16",
						"name": "kycCount",
						"type": "uint16"
					},
					{
						"internalType": "enum Types.BankStatus",
						"name": "status",
						"type": "uint8"
					}
				],
				"internalType": "struct Types.Bank",
				"name": "bank_",
				"type": "tuple"
			}
		],
		"name": "addBank",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "mobileNumber",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "id_",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "kycVerifiedBy",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "dataHash",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "dataUpdatedOn",
						"type": "uint256"
					}
				],
				"internalType": "struct Types.Customer",
				"name": "customer_",
				"type": "tuple"
			},
			{
				"internalType": "uint256",
				"name": "currentTime_",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "notes_",
				"type": "string"
			}
		],
		"name": "addKycRequest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "bankId_",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "notes_",
				"type": "string"
			}
		],
		"name": "removerDatahashPermission",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "id_",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "email_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name_",
				"type": "string"
			}
		],
		"name": "updateBankDetails",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "hash_",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "currentTime_",
				"type": "uint256"
			}
		],
		"name": "updateDatahash",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userId_",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "verified_",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "note_",
				"type": "string"
			}
		],
		"name": "updateKycVerification",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email_",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "mobile_",
				"type": "uint256"
			}
		],
		"name": "updateProfile",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email_",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pageNumber",
				"type": "uint256"
			}
		],
		"name": "getAllBanks",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "totalPages",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "id_",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "ifscCode",
						"type": "string"
					},
					{
						"internalType": "uint16",
						"name": "kycCount",
						"type": "uint16"
					},
					{
						"internalType": "enum Types.BankStatus",
						"name": "status",
						"type": "uint8"
					}
				],
				"internalType": "struct Types.Bank[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "id_",
				"type": "address"
			}
		],
		"name": "getBankDetails",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "id_",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "ifscCode",
						"type": "string"
					},
					{
						"internalType": "uint16",
						"name": "kycCount",
						"type": "uint16"
					},
					{
						"internalType": "enum Types.BankStatus",
						"name": "status",
						"type": "uint8"
					}
				],
				"internalType": "struct Types.Bank",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pageNumber",
				"type": "uint256"
			}
		],
		"name": "getBankRequests",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "totalPages",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "id_",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "userId_",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "customerName",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "bankId_",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "bankName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "dataHash",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "updatedOn",
						"type": "uint256"
					},
					{
						"internalType": "enum Types.KycStatus",
						"name": "status",
						"type": "uint8"
					},
					{
						"internalType": "enum Types.DataHashStatus",
						"name": "dataRequest",
						"type": "uint8"
					},
					{
						"internalType": "string",
						"name": "additionalNotes",
						"type": "string"
					}
				],
				"internalType": "struct Types.KycRequest[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "id_",
				"type": "address"
			}
		],
		"name": "getCustomerDetails",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "mobileNumber",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "id_",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "kycVerifiedBy",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "dataHash",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "dataUpdatedOn",
						"type": "uint256"
					}
				],
				"internalType": "struct Types.Customer",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pageNumber",
				"type": "uint256"
			}
		],
		"name": "getCustomersOfBank",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "totalPages",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "id_",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "userId_",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "customerName",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "bankId_",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "bankName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "dataHash",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "updatedOn",
						"type": "uint256"
					},
					{
						"internalType": "enum Types.KycStatus",
						"name": "status",
						"type": "uint8"
					},
					{
						"internalType": "enum Types.DataHashStatus",
						"name": "dataRequest",
						"type": "uint8"
					},
					{
						"internalType": "string",
						"name": "additionalNotes",
						"type": "string"
					}
				],
				"internalType": "struct Types.KycRequest[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalNoPages_Bank",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalNoPages_Customer",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalNoPages_Kyc",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "reqId_",
				"type": "string"
			}
		],
		"name": "kycRequestExists",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "bankId_",
				"type": "address"
			}
		],
		"name": "searchBanks",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "id_",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "ifscCode",
						"type": "string"
					},
					{
						"internalType": "uint16",
						"name": "kycCount",
						"type": "uint16"
					},
					{
						"internalType": "enum Types.BankStatus",
						"name": "status",
						"type": "uint8"
					}
				],
				"internalType": "struct Types.Bank",
				"name": "",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "id_",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "userId_",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "customerName",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "bankId_",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "bankName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "dataHash",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "updatedOn",
						"type": "uint256"
					},
					{
						"internalType": "enum Types.KycStatus",
						"name": "status",
						"type": "uint8"
					},
					{
						"internalType": "enum Types.DataHashStatus",
						"name": "dataRequest",
						"type": "uint8"
					},
					{
						"internalType": "string",
						"name": "additionalNotes",
						"type": "string"
					}
				],
				"internalType": "struct Types.KycRequest",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "id_",
				"type": "address"
			}
		],
		"name": "searchCustomers",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "mobileNumber",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "id_",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "kycVerifiedBy",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "dataHash",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "dataUpdatedOn",
						"type": "uint256"
					}
				],
				"internalType": "struct Types.Customer",
				"name": "",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "id_",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "userId_",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "customerName",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "bankId_",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "bankName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "dataHash",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "updatedOn",
						"type": "uint256"
					},
					{
						"internalType": "enum Types.KycStatus",
						"name": "status",
						"type": "uint8"
					},
					{
						"internalType": "enum Types.DataHashStatus",
						"name": "dataRequest",
						"type": "uint8"
					},
					{
						"internalType": "string",
						"name": "additionalNotes",
						"type": "string"
					}
				],
				"internalType": "struct Types.KycRequest",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "whoAmI",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "id_",
						"type": "address"
					},
					{
						"internalType": "enum Types.Role",
						"name": "role",
						"type": "uint8"
					},
					{
						"internalType": "enum Types.BankStatus",
						"name": "status",
						"type": "uint8"
					}
				],
				"internalType": "struct Types.User",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]