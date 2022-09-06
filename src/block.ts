interface BlockData{
     index : number;
     hash : string;
     previoushash: string;
     nonce : number;
     transactions: any[];
     key: string;

}

export default class Block implements BlockData{

    //define a constructor for the class
    constructor(
        public index : number = 0,
        public hash : string = '',
        public previoushash : string = '',
        public nonce : number =0,
        public transaction : any[] = [],

    ){}
}