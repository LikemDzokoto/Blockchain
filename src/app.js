"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blockchain_1 = __importDefault(require("./blockchain"));
const block_1 = __importDefault(require("./block"));
const transaction_1 = __importDefault(require("./transaction"));
let b = new block_1.default();
//intialise the blockchain with the genesis block
let bc = new blockchain_1.default(b);
//create a transaction
let t = new transaction_1.default('me', 'you', 7);
//mining phase
let newb = bc.getNextBlock([t]);
bc.addBlock(newb);
console.log(bc.blocks[1].transactions);
