class Epoch {
    constructor(epochTimestamp) {
        if (!Number.isInteger(epochTimestamp)) {
            throw new Error("Invalid epoch timestamp");
        }
        this.value = epochTimestamp;
    }

    toDate() {
        const date = new Date(this.value * 1000);
        return date.toISOString();
    }
}

module.exports = Epoch;
