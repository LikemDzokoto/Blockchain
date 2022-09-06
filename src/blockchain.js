"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    generateHash(block) {
        return '';
    }
}
exports.default = Blockchain;
