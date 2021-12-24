const BoomOutCoin = artifacts.require("BoomOutCoin");
const Airdrop = artifacts.require("Airdrop");

module.exports = async function(deployer) {
    await deployer.deploy(BoomOutCoin);
    const deployedBOC = await BoomOutCoin.deployed();
    const BOCAddress = deployedBOC.address;
    await deployer.deploy(Airdrop, BOCAddress);
};