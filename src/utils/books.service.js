import "server-only"
import DbConnect from "./DbConnect"
import { ObjectId } from "mongodb"

export const getAllBooks = async () =>{
    const db = await DbConnect()
    const allBooksCollection = db.collection('allBooks')
    return allBooksCollection.find().toArray()
}

export const getSingleBook = async (id) =>{
    const db = await DbConnect()
    const allBooksCollection = db.collection('allBooks')
    const query = {_id : new ObjectId(id)}
    return allBooksCollection.findOne(query)
}