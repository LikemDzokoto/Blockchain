import express from 'express';
import * as bodyParser from 'body-parser'

import Blockchain from "./blockchain";
import Block from "./block";
import Transaction from "./transaction";
import { TransactionData } from './types/class';
// import { BlockData } from '../types/types/class';



const app = express();
app.use(bodyParser.json());



//create a genesis block 
let genesisBlock = new Block();



//intialise the blockchain with the genesis block
let bc = new Blockchain(genesisBlock);


app.get('/', function(req, res){
    res.json(bc.blocks)
    
})

// //create a transaction
// let t = new Transaction('me','you', 7);
let transactions: TransactionData[] = [];


// //mining phase
// let newb = bc.getNextBlock([t]);
// bc.addBlock(newb)

// console.log(bc.blocks[1].transactions);

app.listen(3000, function(){
    console.log('port has started on 3000')
})