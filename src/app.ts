import express from 'express';
import * as bodyParser from 'body-parser'

import Blockchain from "./blockchain";
import Block from "./block";
import Transaction from "./transaction";
import { TransactionData } from './types/class';
import transaction from './transaction';
// import { BlockData } from '../types/types/class';



const app = express();
app.use(bodyParser.json());



//create a genesis block 
let genesisBlock = new Block();


let transactions: TransactionData[] = [];




//intialise the blockchain with the genesis block
let bc = new Blockchain(genesisBlock);


app.get('/', function(req, res){
    res.json(bc.blocks);
    
})
app.post('/transaction', function(req, res){
let {from , to , amount} = req.body;

//make a transaction
let t = new Transaction(from , to , amount);
transactions =[...transactions, t];
res.json(t);

}
)


//mining route
app.get('/mine', function(req,res){
let newB = bc.getNextBlock(transactions);
transactions = [];
bc.addBlock(newB);
res.json(bc)

}
)

app.listen(3000, function(){
    console.log('port has started on 3000')
})