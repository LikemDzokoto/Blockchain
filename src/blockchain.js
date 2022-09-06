"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const js_sha256_1 = __importDefault(require("js-sha256"));
const block_1 = __importDefault(require("./block"));
class Blockchain {
    //constructor runs the genesis block first 
    constructor(genesisBlock) {
        this.blocks = [];
        this.addBlock(genesisBlock);
    }
    //add block to blockchain to Blockchain
    addBlock(block) {
        if (this.blocks.length === 0) {
            block.previoushash = "0000000000";
            block.hash = this.generateHash(block);
        }
        this.blocks = [...this.blocks, block];
    }
    getPreviousBlock() {
        return this.blocks[this.blocks.length - 1];
    }
    getNextBlock(transactions) {
        let block = new block_1.default();
        transactions.map(function (t) {
            block.addTransaction(t);
        });
        let previousBlock = this.getPreviousBlock();
        //would return 1 if its the genesis block
        block.index = this.blocks.length;
        block.previoushash = previousBlock.hash;
        block.hash = this.generateHash(block);
        return block;
    }
    generateHash(block) {
        let hash = (0, js_sha256_1.default)(block.key);
        //mining 
        while (!hash.startsWith('7a7')) {
            block.nonce += 1;
            hash = (0, js_sha256_1.default)(block.key);
            console.log(hash);
        }
        return hash;
    }
}
exports.default = Blockchain;
