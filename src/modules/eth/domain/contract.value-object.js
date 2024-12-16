class Contract {
    constructor(address) {
        if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
            throw new Error("Invalid Ethereum contract address");
        }
        this.value = address;
    }
}

module.exports = Contract;
