import Block from './block';
import { BlockData, BlockchainData, TransactionData } from './class';
export default class Blockchain implements BlockchainData {
    blocks: BlockData[];
    difficulty: number;
    constructor(genesisBlock: BlockData);
    genesisBlock: BlockData;
    addBlock(block: BlockData): void;
    getPreviousBlock(): BlockData;
    getNextBlock(transactions: TransactionData[]): Block;
    generateHash(block: BlockData): string;
}
