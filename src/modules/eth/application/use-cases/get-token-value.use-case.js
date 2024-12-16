const Balance = require("../../domain/token-value.entity");
const Epoch = require("../../domain/epoch.value-object");
const Contract = require("../../domain/contract.value-object");
const EthService = require("../../infrastructure/eth.service");

class GetTokenValueUseCase {
    constructor() {
        this.ethService = new EthService();
    }

    async execute({ epochTimestamp }, contractAddress ) {
        const epoch = epochTimestamp;
        const contract = new Contract(contractAddress);

        const { balance, blockNumber } = await this.ethService.getTokenValue(contract.value, epoch);

        return new Balance(balance, blockNumber);
    }
}

module.exports = GetTokenValueUseCase;
