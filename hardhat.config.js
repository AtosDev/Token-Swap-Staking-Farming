require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('hardhat-deploy');

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.11",
  defaultNetwork: 'telos_main',
  networks: {
    fantom: {
      url : "https://rpc.testnet.fantom.network",
      chainId : 4002,
      gas: 2000000,  // tx gas limit
      accounts : ["ff319c733839d71eb281f36db3d668c012c1795e80bcbc9f2287b2cdb92acaa0"]
    },
    polygon: {
      url : "https://polygon-rpc.com",
      chainId : 137,
      gas: 2000000,  // tx gas limit
      accounts : ["ff319c733839d71eb281f36db3d668c012c1795e80bcbc9f2287b2cdb92acaa0"]
    },
    telos_main: {
      url : "https://mainnet.telos.net/evm",
      chainId : 40,
      gas: 2000000,  // tx gas limit
      accounts : ["04f63659276f8bb738b13270343712411a6eb1c8a4267e0e6b6cf2309327633c"]
    },
    rinkeby: {
      url : "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      chainId : 4,
      gas: 2100000,  // tx gas limit
      gasPrice: 8000000000,
      accounts : ["ff319c733839d71eb281f36db3d668c012c1795e80bcbc9f2287b2cdb92acaa0"]
    },
    bsc: {
      url : "https://data-seed-prebsc-1-s3.binance.org:8545/",
      chainId : 97,
      gasPrice: 35000000000,
      saveDeployments: true,
      accounts : ["ff319c733839d71eb281f36db3d668c012c1795e80bcbc9f2287b2cdb92acaa0"]
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "FTM",
  },
  etherscan: {
    // apiKey: "UQ14QAHHRA8JWK8DVJUBU5CPTV1GTG3QI3",
    apiKey: "47I5RB52NG9GZ95TEA38EXNKCAT4DMV5RX",
  },
};
