import Blockchain from "./blockchain";
import Block from "./block";
import Transaction from "./transaction";
import { BlockData, BlockchainData, TransactionData } from '../types/types/class';


describe('Blockchain',()=>{
   let b: BlockData, bc: BlockchainData, t:TransactionData;
   let newB: BlockData

   beforeEach(() => {

let b = new  Block();

//intialise the blockchain with the genesis block
let bc = new Blockchain(b);

//create a transaction
let t = new Transaction('me','you', 7);

   })
    it('checks previous block hash to be Equal to current block  previousHash', ()=>{
        let newB = bc.getNextBlock([t]);
        expect(newB.previoushash).toEqual(b.hash)
    })

    it('checks addBlockc function', ()=> {
        let beforebc = bc.blocks.length;
        bc.addBlock(newB);
        let afterBC = bc.blocks.length;
        expect(beforebc).toBe(afterBC -1)

    })

    
    })