interface TransactionData {
    from: string;
    to: string;
    amount: number;
}
interface BlockData {
    index: number;
    hash: string;
    previoushash: string;
    nonce: number;
    transactions: TransactionData[];
    key: string;
}
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
export {};
