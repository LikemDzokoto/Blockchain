export interface TransactionData {
    from: string;
    to: string;
    amount: number;
}
export interface BlockData {
    index: number;
    hash: string;
    previoushash: string;
    nonce: number;
    transactions: TransactionData[];
    key: string;
    addTransaction(transaction: TransactionData): void;
}
export interface BlockchainData {
    blocks: BlockData[];
    difficulty: number;
    genesisBlock: BlockData;
    addBlock(block: BlockData): void;
    getNextBlock(transactions: TransactionData[]): BlockData;
    getPreviousBlock(): BlockData;
    generateHash(block: BlockData): string;
}
