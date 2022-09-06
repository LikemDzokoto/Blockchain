import Transaction from './transaction';

interface TransactionData{
    from:string;    
    to: string;
    amount:number;
}
interface BlockData{
     index : number;
     hash : string;
     previoushash: string;
     nonce : number;
     transactions: TransactionData[];
     key: string;

}

interface BlockchainData{
  //store all the blocks to the block data 
    blocks: BlockData[];
    //genesis block is a single block
    genesis: BlockData;
    addBlock(block : BlockData) : void;
    //nextBlock(transaction : TransactionData[]) :BlockData;
    generateHash(block:BlockData) : string;
}


export default class Blockchain implements BlockchainData{
    public blocks: BlockData[];
    //constructor runs the genesis block first 
    constructor(genesisBlock : BlockData){
        this.blocks =[];
        this.addBlock(genesisBlock);
    }
    //add block to blockchain to Blockchain
    public addBlock(block: BlockData): void {
        if(this.blocks.length ===0){
           block.previoushash = "0000000000";
           block.hash = this.generateHash(block);
        }
        this.blocks = [...this.blocks, block];
    }
    public generateHash(block: BlockData): string {
        return '';        
    }
}