import "server-only"
import DbConnect from "./DbConnect"

export const getAllBooks = async () =>{
    const db = await DbConnect()
    const allBooksCollection = db.collection('allBooks')
    return allBooksCollection.find().toArray()
}