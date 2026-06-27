import { getAllProducts, createNewProduct } from "../models/product.js";

export async function getProducts(req, res){
    try {
        const results = await getAllProducts();
        res.json(results.rows)
    } catch (error) {
        console.error(error);
        res.status(404).json({message: "not found"})
    }
}

export async function createProduct(req, res){
    const { name, price } = req.body;
    try {
        const result = await createNewProduct(name, price)
        res.status(202).json(result.rows)
        
    } catch (error) {
        console.error(error);
        res.status(404).json({message: 'something went wrong' })
        
    }
}