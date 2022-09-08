import { BlockData, TransactionData } from "./class";
export default class Block implements BlockData {
    index: number;
    hash: string;
    previoushash: string;
    nonce: number;
    transactions: TransactionData[];
    constructor(index?: number, hash?: string, previoushash?: string, nonce?: number, transactions?: TransactionData[]);
    get key(): string;
    addTransaction(transaction: TransactionData): void;
}
