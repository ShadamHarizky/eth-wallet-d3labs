function epochToIsoDate(epoch) {
    const date = new Date(epoch * 1000);
    return date.toISOString();
}

module.exports = { epochToIsoDate };
