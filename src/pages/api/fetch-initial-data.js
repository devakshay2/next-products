import { MongoClient } from "mongodb";

const handler = async (req,res) => {

    try{
        const client = await MongoClient.connect('mongodb+srv://jolly:jolly1234@cluster0.kmlvzdb.mongodb.net/products?retryWrites=true&w=majority');
        const db = client.db();
        const productsCollection = db.collection("products");
        const result = await productsCollection.find().toArray();
        client.close();
        res.status(200).json({message:'Data fetching success', data: result});
    } catch(e){
        console.log(e);
        client.close();
        res.status(200).json({message: 'Data fetching failed!'});
    }


};

export default handler;