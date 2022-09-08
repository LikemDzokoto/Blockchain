import Blockchain from "./blockchain";
import Block from "./block";
import Transaction from "./transaction";

let b = new  Block();

//intialise the blockchain with the genesis block
let bc = new Blockchain(b);

//create a transaction
let t = new Transaction('me','you', 7);


//mining phase
let newb = bc.getNextBlock([t]);
bc.addBlock(newb)

console.log(bc.blocks[1].transactions);
