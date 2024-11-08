const ethenaEagerContracts = {
  ethenaPrimitive: {
    address: "0x923588E24D5f4d373c9514ca04E2Fe219C874638",
    abi: [
      {
        "type": "function",
        "name": "allowance",
        "inputs": [
          { "name": "owner", "type": "address", "internalType": "address" },
          { "name": "spender", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "approve",
        "inputs": [
          { "name": "spender", "type": "address", "internalType": "address" },
          { "name": "value", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "balanceOf",
        "inputs": [
          { "name": "account", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "decimals",
        "inputs": [],
        "outputs": [{ "name": "", "type": "uint8", "internalType": "uint8" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "name",
        "inputs": [],
        "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "symbol",
        "inputs": [],
        "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "totalSupply",
        "inputs": [],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "transfer",
        "inputs": [
          { "name": "to", "type": "address", "internalType": "address" },
          { "name": "value", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "transferFrom",
        "inputs": [
          { "name": "from", "type": "address", "internalType": "address" },
          { "name": "to", "type": "address", "internalType": "address" },
          { "name": "value", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
      },
      {
        "type": "event",
        "name": "Approval",
        "inputs": [
          {
            "name": "owner",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "spender",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "value",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "Transfer",
        "inputs": [
          {
            "name": "from",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "to",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "value",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      },
      {
        "type": "error",
        "name": "ERC20InsufficientAllowance",
        "inputs": [
          { "name": "spender", "type": "address", "internalType": "address" },
          { "name": "allowance", "type": "uint256", "internalType": "uint256" },
          { "name": "needed", "type": "uint256", "internalType": "uint256" }
        ]
      },
      {
        "type": "error",
        "name": "ERC20InsufficientBalance",
        "inputs": [
          { "name": "sender", "type": "address", "internalType": "address" },
          { "name": "balance", "type": "uint256", "internalType": "uint256" },
          { "name": "needed", "type": "uint256", "internalType": "uint256" }
        ]
      },
      {
        "type": "error",
        "name": "ERC20InvalidApprover",
        "inputs": [
          { "name": "approver", "type": "address", "internalType": "address" }
        ]
      },
      {
        "type": "error",
        "name": "ERC20InvalidReceiver",
        "inputs": [
          { "name": "receiver", "type": "address", "internalType": "address" }
        ]
      },
      {
        "type": "error",
        "name": "ERC20InvalidSender",
        "inputs": [
          { "name": "sender", "type": "address", "internalType": "address" }
        ]
      },
      {
        "type": "error",
        "name": "ERC20InvalidSpender",
        "inputs": [
          { "name": "spender", "type": "address", "internalType": "address" }
        ]
      }
    ]    
  },
  eagerToken: {
    address: "0xd730952a12c77ff1dF38950B274c73D3317C6fe6",
    abi: [
      {
        "type": "constructor",
        "inputs": [
          { "name": "_underlying", "type": "address", "internalType": "address" },
          { "name": "_name", "type": "string", "internalType": "string" },
          { "name": "_symbol", "type": "string", "internalType": "string" },
          { "name": "_yieldOracle", "type": "address", "internalType": "address" },
          { "name": "_pegOracle", "type": "address", "internalType": "address" },
          { "name": "_lrtToken", "type": "address", "internalType": "address" }
        ],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "SLASHED",
        "inputs": [],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "allowance",
        "inputs": [
          { "name": "owner", "type": "address", "internalType": "address" },
          { "name": "spender", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "approve",
        "inputs": [
          { "name": "spender", "type": "address", "internalType": "address" },
          { "name": "value", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "asset",
        "inputs": [],
        "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "balanceOf",
        "inputs": [
          { "name": "account", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "convertToAssets",
        "inputs": [
          { "name": "shares", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "convertToShares",
        "inputs": [
          { "name": "assets", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "decimals",
        "inputs": [],
        "outputs": [{ "name": "", "type": "uint8", "internalType": "uint8" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "deposit",
        "inputs": [
          { "name": "assets", "type": "uint256", "internalType": "uint256" },
          { "name": "receiver", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "lrtToken",
        "inputs": [],
        "outputs": [
          {
            "name": "",
            "type": "address",
            "internalType": "contract IERC20Extended"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "lrtVault",
        "inputs": [],
        "outputs": [
          { "name": "", "type": "address", "internalType": "contract ILRTVault" }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "maxDeposit",
        "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "maxMint",
        "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "maxRedeem",
        "inputs": [
          { "name": "owner", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "maxWithdraw",
        "inputs": [
          { "name": "owner", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "mint",
        "inputs": [
          { "name": "shares", "type": "uint256", "internalType": "uint256" },
          { "name": "receiver", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "name",
        "inputs": [],
        "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "pegOracle",
        "inputs": [],
        "outputs": [
          {
            "name": "",
            "type": "address",
            "internalType": "contract IEACAggregatorProxy"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "previewDeposit",
        "inputs": [
          { "name": "assets", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "previewMint",
        "inputs": [
          { "name": "shares", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "previewRedeem",
        "inputs": [
          { "name": "shares", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "previewWithdraw",
        "inputs": [
          { "name": "assets", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "redeem",
        "inputs": [
          { "name": "shares", "type": "uint256", "internalType": "uint256" },
          { "name": "receiver", "type": "address", "internalType": "address" },
          { "name": "owner", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "slash",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "symbol",
        "inputs": [],
        "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "totalAssets",
        "inputs": [],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "totalSupply",
        "inputs": [],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "transfer",
        "inputs": [
          { "name": "to", "type": "address", "internalType": "address" },
          { "name": "value", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "transferFrom",
        "inputs": [
          { "name": "from", "type": "address", "internalType": "address" },
          { "name": "to", "type": "address", "internalType": "address" },
          { "name": "value", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "underlying",
        "inputs": [],
        "outputs": [
          { "name": "", "type": "address", "internalType": "contract IERC20" }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "withdraw",
        "inputs": [
          { "name": "assets", "type": "uint256", "internalType": "uint256" },
          { "name": "receiver", "type": "address", "internalType": "address" },
          { "name": "owner", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "yieldOracle",
        "inputs": [],
        "outputs": [
          { "name": "", "type": "address", "internalType": "contract ERC4626" }
        ],
        "stateMutability": "view"
      },
      {
        "type": "event",
        "name": "Approval",
        "inputs": [
          {
            "name": "owner",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "spender",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "value",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "Deposit",
        "inputs": [
          {
            "name": "sender",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "owner",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "assets",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "shares",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "Transfer",
        "inputs": [
          {
            "name": "from",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "to",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "value",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "Withdraw",
        "inputs": [
          {
            "name": "sender",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "receiver",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "owner",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "assets",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "shares",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      },
      {
        "type": "error",
        "name": "ERC20InsufficientAllowance",
        "inputs": [
          { "name": "spender", "type": "address", "internalType": "address" },
          { "name": "allowance", "type": "uint256", "internalType": "uint256" },
          { "name": "needed", "type": "uint256", "internalType": "uint256" }
        ]
      },
      {
        "type": "error",
        "name": "ERC20InsufficientBalance",
        "inputs": [
          { "name": "sender", "type": "address", "internalType": "address" },
          { "name": "balance", "type": "uint256", "internalType": "uint256" },
          { "name": "needed", "type": "uint256", "internalType": "uint256" }
        ]
      },
      {
        "type": "error",
        "name": "ERC20InvalidApprover",
        "inputs": [
          { "name": "approver", "type": "address", "internalType": "address" }
        ]
      },
      {
        "type": "error",
        "name": "ERC20InvalidReceiver",
        "inputs": [
          { "name": "receiver", "type": "address", "internalType": "address" }
        ]
      },
      {
        "type": "error",
        "name": "ERC20InvalidSender",
        "inputs": [
          { "name": "sender", "type": "address", "internalType": "address" }
        ]
      },
      {
        "type": "error",
        "name": "ERC20InvalidSpender",
        "inputs": [
          { "name": "spender", "type": "address", "internalType": "address" }
        ]
      },
      {
        "type": "error",
        "name": "ERC4626ExceededMaxDeposit",
        "inputs": [
          { "name": "receiver", "type": "address", "internalType": "address" },
          { "name": "assets", "type": "uint256", "internalType": "uint256" },
          { "name": "max", "type": "uint256", "internalType": "uint256" }
        ]
      },
      {
        "type": "error",
        "name": "ERC4626ExceededMaxMint",
        "inputs": [
          { "name": "receiver", "type": "address", "internalType": "address" },
          { "name": "shares", "type": "uint256", "internalType": "uint256" },
          { "name": "max", "type": "uint256", "internalType": "uint256" }
        ]
      },
      {
        "type": "error",
        "name": "ERC4626ExceededMaxRedeem",
        "inputs": [
          { "name": "owner", "type": "address", "internalType": "address" },
          { "name": "shares", "type": "uint256", "internalType": "uint256" },
          { "name": "max", "type": "uint256", "internalType": "uint256" }
        ]
      },
      {
        "type": "error",
        "name": "ERC4626ExceededMaxWithdraw",
        "inputs": [
          { "name": "owner", "type": "address", "internalType": "address" },
          { "name": "assets", "type": "uint256", "internalType": "uint256" },
          { "name": "max", "type": "uint256", "internalType": "uint256" }
        ]
      },
      { "type": "error", "name": "InvalidSlashCondition", "inputs": [] },
      { "type": "error", "name": "LRTVaultSlashed", "inputs": [] },
      {
        "type": "error",
        "name": "SafeERC20FailedOperation",
        "inputs": [
          { "name": "token", "type": "address", "internalType": "address" }
        ]
      }
    ]
  },
  lrtVault: {
    address: "0xf20f033fcd9638778c56956365213aa7bc634bac",
    abi: [
      {
        "type": "constructor",
        "inputs": [
          { "name": "_underlying", "type": "address", "internalType": "address" },
          { "name": "_name", "type": "string", "internalType": "string" },
          { "name": "_symbol", "type": "string", "internalType": "string" }
        ],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "allowance",
        "inputs": [
          { "name": "owner", "type": "address", "internalType": "address" },
          { "name": "spender", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "approve",
        "inputs": [
          { "name": "spender", "type": "address", "internalType": "address" },
          { "name": "value", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "asset",
        "inputs": [],
        "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "balanceOf",
        "inputs": [
          { "name": "account", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "convertToAssets",
        "inputs": [
          { "name": "shares", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "convertToShares",
        "inputs": [
          { "name": "assets", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "decimals",
        "inputs": [],
        "outputs": [{ "name": "", "type": "uint8", "internalType": "uint8" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "deposit",
        "inputs": [
          { "name": "assets", "type": "uint256", "internalType": "uint256" },
          { "name": "receiver", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "maxDeposit",
        "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "maxMint",
        "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "maxRedeem",
        "inputs": [
          { "name": "owner", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "maxWithdraw",
        "inputs": [
          { "name": "owner", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "mint",
        "inputs": [
          { "name": "shares", "type": "uint256", "internalType": "uint256" },
          { "name": "receiver", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "name",
        "inputs": [],
        "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "previewDeposit",
        "inputs": [
          { "name": "assets", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "previewMint",
        "inputs": [
          { "name": "shares", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "previewRedeem",
        "inputs": [
          { "name": "shares", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "previewWithdraw",
        "inputs": [
          { "name": "assets", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "redeem",
        "inputs": [
          { "name": "shares", "type": "uint256", "internalType": "uint256" },
          { "name": "receiver", "type": "address", "internalType": "address" },
          { "name": "owner", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "slashVault",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "symbol",
        "inputs": [],
        "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "totalAssets",
        "inputs": [],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "totalSupply",
        "inputs": [],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "transfer",
        "inputs": [
          { "name": "to", "type": "address", "internalType": "address" },
          { "name": "value", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "transferFrom",
        "inputs": [
          { "name": "from", "type": "address", "internalType": "address" },
          { "name": "to", "type": "address", "internalType": "address" },
          { "name": "value", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "withdraw",
        "inputs": [
          { "name": "assets", "type": "uint256", "internalType": "uint256" },
          { "name": "receiver", "type": "address", "internalType": "address" },
          { "name": "owner", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "nonpayable"
      },
      {
        "type": "event",
        "name": "Approval",
        "inputs": [
          {
            "name": "owner",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "spender",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "value",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "Deposit",
        "inputs": [
          {
            "name": "sender",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "owner",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "assets",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "shares",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "Transfer",
        "inputs": [
          {
            "name": "from",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "to",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "value",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "Withdraw",
        "inputs": [
          {
            "name": "sender",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "receiver",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "owner",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "assets",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "shares",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      },
      {
        "type": "error",
        "name": "ERC20InsufficientAllowance",
        "inputs": [
          { "name": "spender", "type": "address", "internalType": "address" },
          { "name": "allowance", "type": "uint256", "internalType": "uint256" },
          { "name": "needed", "type": "uint256", "internalType": "uint256" }
        ]
      },
      {
        "type": "error",
        "name": "ERC20InsufficientBalance",
        "inputs": [
          { "name": "sender", "type": "address", "internalType": "address" },
          { "name": "balance", "type": "uint256", "internalType": "uint256" },
          { "name": "needed", "type": "uint256", "internalType": "uint256" }
        ]
      },
      {
        "type": "error",
        "name": "ERC20InvalidApprover",
        "inputs": [
          { "name": "approver", "type": "address", "internalType": "address" }
        ]
      },
      {
        "type": "error",
        "name": "ERC20InvalidReceiver",
        "inputs": [
          { "name": "receiver", "type": "address", "internalType": "address" }
        ]
      },
      {
        "type": "error",
        "name": "ERC20InvalidSender",
        "inputs": [
          { "name": "sender", "type": "address", "internalType": "address" }
        ]
      },
      {
        "type": "error",
        "name": "ERC20InvalidSpender",
        "inputs": [
          { "name": "spender", "type": "address", "internalType": "address" }
        ]
      },
      {
        "type": "error",
        "name": "ERC4626ExceededMaxDeposit",
        "inputs": [
          { "name": "receiver", "type": "address", "internalType": "address" },
          { "name": "assets", "type": "uint256", "internalType": "uint256" },
          { "name": "max", "type": "uint256", "internalType": "uint256" }
        ]
      },
      {
        "type": "error",
        "name": "ERC4626ExceededMaxMint",
        "inputs": [
          { "name": "receiver", "type": "address", "internalType": "address" },
          { "name": "shares", "type": "uint256", "internalType": "uint256" },
          { "name": "max", "type": "uint256", "internalType": "uint256" }
        ]
      },
      {
        "type": "error",
        "name": "ERC4626ExceededMaxRedeem",
        "inputs": [
          { "name": "owner", "type": "address", "internalType": "address" },
          { "name": "shares", "type": "uint256", "internalType": "uint256" },
          { "name": "max", "type": "uint256", "internalType": "uint256" }
        ]
      },
      {
        "type": "error",
        "name": "ERC4626ExceededMaxWithdraw",
        "inputs": [
          { "name": "owner", "type": "address", "internalType": "address" },
          { "name": "assets", "type": "uint256", "internalType": "uint256" },
          { "name": "max", "type": "uint256", "internalType": "uint256" }
        ]
      },
      { "type": "error", "name": "InvalidETokenCall", "inputs": [] },
      {
        "type": "error",
        "name": "SafeERC20FailedOperation",
        "inputs": [
          { "name": "token", "type": "address", "internalType": "address" }
        ]
      }
    ],
  },
  lrtToken: {
    address: '0x0fc8DD69670a17DfBFE3093DEE45332e944aB8b9',
    abi: [
      {
        "type": "function",
        "name": "allowance",
        "inputs": [
          { "name": "owner", "type": "address", "internalType": "address" },
          { "name": "spender", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "approve",
        "inputs": [
          { "name": "spender", "type": "address", "internalType": "address" },
          { "name": "value", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "balanceOf",
        "inputs": [
          { "name": "account", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "decimals",
        "inputs": [],
        "outputs": [{ "name": "", "type": "uint8", "internalType": "uint8" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "name",
        "inputs": [],
        "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "symbol",
        "inputs": [],
        "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "totalSupply",
        "inputs": [],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "transfer",
        "inputs": [
          { "name": "to", "type": "address", "internalType": "address" },
          { "name": "value", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "transferFrom",
        "inputs": [
          { "name": "from", "type": "address", "internalType": "address" },
          { "name": "to", "type": "address", "internalType": "address" },
          { "name": "value", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
      },
      {
        "type": "event",
        "name": "Approval",
        "inputs": [
          {
            "name": "owner",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "spender",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "value",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "Transfer",
        "inputs": [
          {
            "name": "from",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "to",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "value",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      },
      {
        "type": "error",
        "name": "ERC20InsufficientAllowance",
        "inputs": [
          { "name": "spender", "type": "address", "internalType": "address" },
          { "name": "allowance", "type": "uint256", "internalType": "uint256" },
          { "name": "needed", "type": "uint256", "internalType": "uint256" }
        ]
      },
      {
        "type": "error",
        "name": "ERC20InsufficientBalance",
        "inputs": [
          { "name": "sender", "type": "address", "internalType": "address" },
          { "name": "balance", "type": "uint256", "internalType": "uint256" },
          { "name": "needed", "type": "uint256", "internalType": "uint256" }
        ]
      },
      {
        "type": "error",
        "name": "ERC20InvalidApprover",
        "inputs": [
          { "name": "approver", "type": "address", "internalType": "address" }
        ]
      },
      {
        "type": "error",
        "name": "ERC20InvalidReceiver",
        "inputs": [
          { "name": "receiver", "type": "address", "internalType": "address" }
        ]
      },
      {
        "type": "error",
        "name": "ERC20InvalidSender",
        "inputs": [
          { "name": "sender", "type": "address", "internalType": "address" }
        ]
      },
      {
        "type": "error",
        "name": "ERC20InvalidSpender",
        "inputs": [
          { "name": "spender", "type": "address", "internalType": "address" }
        ]
      }
    ]    
  }
} as const;

export default ethenaEagerContracts;