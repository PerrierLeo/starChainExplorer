class Block {
  constructor(block) {
    this.hash = block["hash"];
    this.parentHash = block["parentHash"];
    this.nonce = block["nonce"];
    this.extraData = block["extraData"];
    this.miner = block["miner"];
    this.difficulty = block["difficulty"];
    this.number = block["number"];
    this.date = new Date(block["timestamp"] * 1000);
    this.transactions = block["transactions"];
  }
  // "gasLimit": { "type": "BigNumber", "hex": "0x01c9c380" }, "gasUsed": { "type": "BigNumber", "hex": "0x9cd810" },
  // "baseFeePerGas": { "type": "BigNumber", "hex": "0x0503a8d63d" }, "_difficulty": { "type": "BigNumber", "hex": "0x00" } }

  //   insert(string) {
  //     let node = this.root;
  //     for (let i = 0; i < string.length; i++) {
  //       if (!node.children[string[i]]) {
  //         node.children[string[i]] = new TrieNode(string[i]);
  //       }
  //       node = node.children[string[i]];
  //       if (i === string.length - 1) node.isWord = true;
  //     }
  //   }

  //   contains(word) {
  //     let node = this.root;

  //     for (let i = 0; i < word.length; i++) {
  //       if (node.children[word[i]]) {
  //         node = node.children[word[i]];
  //       } else {
  //         return false;
  //       }
  //     }
  //     return node.isWord;
  //   }
}

export default Block;
