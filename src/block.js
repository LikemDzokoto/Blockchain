"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    //define a constructor for the class
    constructor(index = 0, hash = '', previoushash = '', nonce = 0, transactions = []) {
        this.index = index;
        this.hash = hash;
        this.previoushash = previoushash;
        this.nonce = nonce;
        this.transactions = transactions;
    }
    get key() {
        return JSON.stringify(this.transactions) + this.index + this.previoushash + this.nonce;
    }
    addTransaction(transaction) {
        this.transactions = [...this.transactions, transaction];
    }
}
exports.default = Block;
