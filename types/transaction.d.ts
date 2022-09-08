interface TransactionData {
    from: string;
    to: string;
    amount: number;
}
export default class Transaction implements TransactionData {
    from: string;
    to: string;
    amount: number;
    constructor(from: string, to: string, amount: number);
}
export {};
