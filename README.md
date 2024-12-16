## ETH Wallet

I created this Node.js service using the Express framework, implementing a simplified version of the DDD pattern to align with the requirements of the task. and i'm provide this API to retrieve token quantities from the Ethereum network, utilizing the [ethereum-block-by-date](https://www.npmjs.com/package/ethereum-block-by-date) package, as well as web3 and [ethers](https://www.npmjs.com/package/ethers) as the library for Ethereum. I hope this solution meets the instructions outlined in the task.

## Running Project

1. Make sure Node and npm are installed in the latest versions.
2. Set up the environment by adjusting it according to the provided .env-example file.
3. Setup ENV from ***.env-example*** adjust to local configuration
4. Run in the terminal **npx nodemon app.js**

## Endpoints

### 1. **POST /api/eth/value**
#### Description:
This API only accepts an epoch timestamp in its payload, which is used as a parameter to fetch the block corresponding to the specified time. This allows us to retrieve the ETH balance based on the block number.

#### Request:
- **Method**: `POST`
- **Endpoint**: `/api/eth/token/value`
- **Headers**:
  - `Authorization`: -

#### Response Code:
- **Sucess**: `200`
- **Internal Server Error**: `500`

#### Body:
```json
{
    "epochTimestamp": 1730500135,
}
```

#### Response:
```json
{
    "balance": 279513.78603442054,
    "blockNumber": 21095785
}
```