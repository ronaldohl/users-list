export interface User {
    id:number
    name:string
    email:string
    avatar?:string
}


export type UserFilterKey = "name" | "email" 


export interface FiltersForm{
    query:string,
    orderBy:string,
    order:string
}