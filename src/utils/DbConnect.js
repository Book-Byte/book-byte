import { MongoClient, ServerApiVersion } from 'mongodb';
/**
 * @type {import("mongodb").Db}
 */
let db;

const DbConnect = async () =>{
    if (db) return db;
    try {
        const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.q8ydqb9.mongodb.net/?retryWrites=true&w=majority`;
        
        // Create a MongoClient with a MongoClientOptions object to set the Stable API version
        const client = new MongoClient(uri, {
          serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
          }
        });
        db = client.db("BookSwap");
        await client.db("admin").command({ ping: 1 });
        console.log("You are connected to MongoDB!");
        return db;
    } catch (err) {
      // Ensures that the client will close when you finish/error
      console.log(err.message)
    }
}

export default DbConnect;

