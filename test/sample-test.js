const { expect } = require("chai");
const { ethers } = require("hardhat");

describe('NFTDev', async () => {
    it('should mint and transfer an NFT to someone', async function () {

        const NFTDev = await NFTDev.deploy("NFTDev", "TT", "ipfs://");
        await NFTDev.deployed();

        const recipient = process.env.RECIPIENT;

        let balance = await NFTDev.balanceOf(recipient);
        expect(balance).to.equal(0);

        
        const newlyMintedToken = await NFTDev.mint(recipient, 1, { value: ethers.utils.parseEther('0.05') });

        // wait until the transaction is mined
        await newlyMintedToken.wait();

        balance = await NFTDev.balanceOf(recipient)
        expect(balance).to.equal(1);
    });
})