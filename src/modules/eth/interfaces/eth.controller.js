const express = require("express");
const GetBalanceUseCase = require("../application/use-cases/get-balance.use-case");

const router = express.Router();
const getBalanceUseCase = new GetBalanceUseCase();

router.post("/eth/token/value", async (req, res) => {
    const { epochTimestamp } = req.body;
    
    try {
        const result = await getBalanceUseCase.execute({ epochTimestamp }, process.env.CONTRACT_ADDRESS);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
