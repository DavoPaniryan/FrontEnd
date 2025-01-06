export interface IBook {
    id:  string
    title: string
    pages  : number
    price : number
    authorId : number
}
export interface IBookForm {
    title: string;
    pages: number;
    price: number;
    authorId: number;
}
export interface IAuthorForm {
    name: string;
    surname: string;
}