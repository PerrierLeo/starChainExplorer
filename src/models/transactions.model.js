class Transaction {
  constructor(data) {
    this.blockNum = data["blockNum"];
    this.uniqueId = data["uniqueId"];
    this.hash = data["hash"];
    this.from = data["from"];
    this.to = data["to"];
    this.value = data["value"];
    this.erc721TokenId = data["erc721TokenId"];
    this.erc1155Metadata = data["erc1155Metadata"];
    this.tokenId = data["tokenId"];
    this.asset = data["asset"];
    this.category = data["category"];
    this.rawContract = data["rawContract"];
    this.metadata = data["metadata"]["blockTimestamp"];
  }
}
//  "metadata": { "blockTimestamp": "2024-02-12T21:40:59.000Z" }
export default Transaction;
