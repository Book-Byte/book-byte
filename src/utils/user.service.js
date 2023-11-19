import "server-only";
import DbConnect from "./DbConnect"

export const postUser = async (data) => {
    try {
        const db = await DbConnect()
        const allUsersCollection = db.collection('users')
        const query = {email : data.email}
        const existingUser = await allUsersCollection.findOne(query)
        if (existingUser) {
            return;
        } else {
            const result = await allUsersCollection.insertOne(data)
            return result
        }
    } catch (error) {
        console.error("Error inserting user data:", error);
        throw error;;
    }
}