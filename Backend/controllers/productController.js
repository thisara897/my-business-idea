// create, delete, update and retrieve of the product

import Product from "../models/product.js"

export async function createProduct(req, res){

    if(req.user == null){ // check the user null
        res.status(401).json({message : "unotherized"})
        return
    }
    if(!req.user.isAdmin){// check the requested user is admin or not
        res.status(403).json({message : "only admin can create products"})
        return
    }

    try{

        const existingProduct = await Product.findOne({productId : req.body.productId}) // find the product is exist in the database or not

        if(existingProduct != null){
            res.status(400).json({message : "Product with this productId already exists"})
            return
        }

        const product = new Product(req.body) // create the product
        res.status(201).json({message : "Product created successfully"})
        await product.save()

    }catch(err){
        res.status(500).json({message : err.message})
    }

}

export async function getAllProducts(req, res){
    try{
        if(req.user != null && req.user.isAdmin){ // check whether the requested user is an admin or not

            const products = await Product.find() // if user is an admin show the all product (available and unavailable products)
            res.json(products)
            
        }else{
            const products = await Product.find({isAvailable : true}) // if the requested user is not an admin show only the available products
            res.json(products)
        }
        
    }catch(err){
        res.status(500).json({message : err.message})
    }
}

export async function deleteProduct(req, res){
    if(req.user != null && req.user.isAdmin){ // check whether the requested user is an admin or not

        try{
            const product = await Product.findOne({productId : req.params.productId})
            if(Product == null){
                res.status(404).json({message : "Product not found"})
                return
            }

            await Product.deleteOne({productId : req.params.productId})

            res.status(200).json({message: " product deleted successfully"})


        }catch(err){
            res.status(500).json({message : err.message})
        }
            
            
    }else{
        res.status(403).json({message : "only admins can delete products"})
        return
    }
}

export async function updateProduct(req, res){
    if(req.user != null && req.user.isAdmin){
        try{

            if(req.body.productId != null){
                res.status(400).json({message : "productId cannot be updated"})
                return
            }

            await Product.updateOne({productId: req.params.productId}, req.body)

            res.json({message : "product updated successfully"})

        }catch(err){
            res.status(500).json({message: err.message})
        }
    }else{
        res.status(403).json({message : "only admins can update products"})
        return
    }
}

export async function getProductById(req, res){
    try{
        const product = await Product.findOne({productId : req.params.productId})
        if(product == null){
            res.status(404).json({message : "The product not found"})
            return
        }
        if(product.isAvailable){
            res.json(product)
        }else{
            if(req.user != null && req.user.isAdmin){
                res.json(product)
            }else{
                res.status(403).json({message : "Only admins can veiw unavailable products"})
                return
            }
        }
    }catch(err){
        res.status(500).json({message : err.message})
    }
}