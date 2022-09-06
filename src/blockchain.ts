import sha256  from 'js-sha256';
import Block from './block';


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
    genesisBlock: BlockData;
    addBlock(block : BlockData) : void;
    getNextBlock(transactions : TransactionData[]) :BlockData;
    getPreviousBlock() : BlockData;
    generateHash(block:BlockData) : string;
}


export default class Blockchain implements BlockchainData{
    public blocks: BlockData[];
    //constructor runs the genesis block first 
    constructor(genesisBlock : BlockData){
        this.blocks =[];
        this.addBlock(genesisBlock);
    }
    genesisBlock!: BlockData;
    //add block to blockchain to Blockchain
    public addBlock(block: BlockData): void {
        if(this.blocks.length ===0){
           block.previoushash = "0000000000";
           block.hash = this.generateHash(block);
        }
        this.blocks = [...this.blocks, block];
    }
    public getPreviousBlock(): BlockData{
        return this.blocks[this.blocks.length -1];
    }

    public getNextBlock(transactions: TransactionData[]) {
        let block = new Block();
        transactions.map(function(t: TransactionData){
            block.addTransaction(t);
        })
         

        let previousBlock  =this.getPreviousBlock();
        //would return 1 if its the genesis block
        block.index = this.blocks.length;
        block.previoushash = previousBlock.hash;    
        block.hash = this.generateHash(block);
    
        return block;
   
    }

        

    public generateHash(block: BlockData): string {
        let  hash  =sha256(block.key);
        
        //mining 
        while(!hash.startsWith('7a7')){
            block.nonce +=1;
            hash = sha256(block.key);
            console.log(hash);
        }
        
        return hash;

    }
}   