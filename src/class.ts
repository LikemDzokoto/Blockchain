export interface TransactionData{
    from:string;    
    to: string;
    amount:number;
}
export interface BlockData{
     index : number;
     hash : string;
     previoushash: string;
     nonce : number;
     transactions: TransactionData[];
     key: string;

}

export interface BlockchainData{
  //store all the blocks to the block data 
    blocks: BlockData[];
    //setup block difficulty
    difficulty : number;
    //genesis block is a single block
    genesisBlock: BlockData;
    addBlock(block : BlockData) : void;
    getNextBlock(transactions : TransactionData[]) :BlockData;
    getPreviousBlock() : BlockData;
    generateHash(block:BlockData) : string;
}
