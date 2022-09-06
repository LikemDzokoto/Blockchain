
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

export default class Block implements BlockData{

    //define a constructor for the class
    constructor(
        public index : number = 0,
        public hash : string = '',
        public previoushash : string = '',
        public nonce : number =0,
        public transactions : TransactionData[] = [],

    ){}
    get key(): string {
        return JSON.stringify(this.transactions) + this.index + this.previoushash + this.nonce;

    }
    public addTransaction(transaction : TransactionData) : void {
        this.transactions = [...this.transactions , transaction];   
    }
}