export interface ITransaction{
    target: string,
    purpose: string,
    amount: number,
    date: Date
    id?: string
}