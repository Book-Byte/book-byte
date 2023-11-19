import "server-only"
import DbConnect from "./DbConnect"
import { ObjectId } from "mongodb"

export const getAllBooks = async () => {
    try {
        const db = await DbConnect()
        const allBooksCollection = db.collection('allBooks')
        return allBooksCollection.find().toArray()
    } catch (error) {
        console.error("Error fetching All book:", error);
        throw error;;
    }
}

export const getSingleBook = async (id) => {
    try {
        const db = await DbConnect()
        const allBooksCollection = db.collection('allBooks')
        const query = { _id: new ObjectId(id) }
        return allBooksCollection.findOne(query)
    } catch (error) {
        console.error("Error fetching single book:", error);
        throw error;;
    }
}

export const searchBooks = async (char) => {
    try {
        const db = await DbConnect()
        const allBooksCollection = db.collection('allBooks')
        const query = {$or : [{title : {$regex : char, $options: "i"}}]}
        const result = await allBooksCollection.find(query).toArray()
        console.log(result)
        return result
    } catch (error) {
        console.error("Error fetching searched book:", error);
        throw error;;
    }
}