"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blockchain_1 = __importDefault(require("./blockchain"));
const block_1 = __importDefault(require("./block"));
let b = new block_1.default();
let bc = new blockchain_1.default(b);
console.log(bc.blocks);
