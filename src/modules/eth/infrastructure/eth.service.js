const { ethers } = require("ethers");
const EthDater = require("ethereum-block-by-date");

class EthService {
    constructor() {
        this.provider = new ethers.InfuraProvider("mainnet", process.env.INFURA_API_KEY);
        this.dater = new EthDater(
            this.provider
        );
        
    }

    async getTokenValue(contractAddress, epochTimestamp) {
        try {
            const targetDate = new Date(epochTimestamp * 1000);
            const block = await this.dater.getDate(targetDate, true,false);

            const balanceInWei = await this.provider.getBalance(contractAddress,block.block);
            const balanceInEth = ethers.formatEther(balanceInWei);

            return {
                balance: parseFloat(balanceInEth),
                blockNumber: block.block,
            };
        } catch (error) {
            console.error("Error fetching balance:", error);
            throw new Error("Failed to fetch ETH balance at specified date");
        }
    }

}

module.exports = EthService;
