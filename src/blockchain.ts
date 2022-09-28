import sha256  from 'js-sha256';
import Block from './block';

import { BlockData,BlockchainData,TransactionData } from './types/class';



export default class Blockchain implements BlockchainData{
    public blocks: BlockData[];
    public difficulty: number; 
    //constructor runs the genesis block first 
    constructor(genesisBlock : BlockData){
        this.blocks =[];
        this.difficulty =3  ;
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
        while(!hash.startsWith(Array(this.difficulty +1).join('0'))){
            block.nonce +=1;
            hash = sha256(block.key);
            console.log(hash);
        }
        
        return hash;

    }
}   