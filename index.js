
const express = require('express');

const app = express();

app.use(express.json());

// http://localhost:8000/
const PORT = 8000;

// array 


const products = [
    {id:1,name:'T-shirt',price:'300',color:'red'},
    {id:2,name:'Cargo',price:'500',color:'grey'},
    {id:3,name:'hoodie',price:'1200',color:'yellow'},
    {id:4,name:'BellBottom',price:'1100',color:'green'},
    {id:5,name:'WideLeg',price:'1500',color:'yellow'},
    {id:6,name:'mid-torso',price:'1200',color:'blue'},



]

app.get('/getallproducts',(req,res)=>{
    res.status(200).send({
        message:'all products fetched',
        products
    })
})

app.get('/',(req,res)=>{
    res.status(200).send({message:'server running succesfully',success:true,products} )
})

app.post('/post',(req,res)=>{
    const newProduct = req.body;
    products.push(newProduct);
    res.status(200).send({message:'product added succesfully',success:true})
})

app.put('/put/:id',(req,res)=>{
    const ID = req.params.id;
    index =products.findIndex(product => product.id == ID);
    if(index== -1){
        res.status(200).send({message:'product not found',success:false})
    }
    products[index].name = req.body.name;
    products[index].price = req.body.price;
    products[index].color = req.body.color;
    res.status(200).send({message:'product updated succesfully',success:true} )

})

app.delete('/delete/:id',(req,res)=>{
    const ID = req.params.id;
    index = products.findIndex(product => product.id == ID);
    if(index == -1){
        res.status(200).send({message:'product not found',success :false})
    }
    products.splice(index,1);
    res.status(200).send({message:'producted deleted succesfully',success:true})
})


app.listen(PORT,()=>{
    console.log(`listening on port :${PORT} `)
})