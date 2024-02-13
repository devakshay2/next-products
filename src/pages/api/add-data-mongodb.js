import { MongoClient } from "mongodb";

// this api fetches the data from a public api and adds it to my mongodb`

const handler = async (req, res) => {

    try{
        const response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json');
        const data = await response.json();
        console.log('yaaaaaaaahoooooo');

        const client = await MongoClient.connect('mongodb+srv://jolly:jolly1234@cluster0.kmlvzdb.mongodb.net/products?retryWrites=true&w=majority');
        const db = client.db();
        const productsCollection = db.collection("products");
        let bulk = productsCollection.initializeUnorderedBulkOp();

        for( let i=0; i< data.length; i++){
               console.log(i);
               const curr = data[i];
               bulk.insert({
                id: curr.id,
                brand: curr.brand,
                name: curr.name,
                price: curr.price,
                price_sign: curr.price_sign,
                currency: curr.currency,
                image_link: curr.image_link,
                product_link: curr.product_link,
                website_link: curr.website_link,
                description: curr.description,
                rating: curr.rating,
                category: curr.category,
                product_type: curr.product_type
               });
        }
        const result = await bulk.execute();
        client.close();
        console.log(result);
        res.status(201).json({ message: "all done"});
    } catch(e){
        console.log('noooo', e);
        res.status(400).json({ message: "not done"});
    }
    
};

export default handler;