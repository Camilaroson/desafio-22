const express = require('express')
const app = express()
const faker = require('faker')
app.use(express.json())

const productos = []
const producto = {
    nombre : faker.commerce.productName(),
    precio : faker.commerce.price(),
    foto : faker.image.imageUrl()
}

app.get('/productos/vista-test',(req,res)=>{

const {cant} = req.query

  if(cant == 0){
    res.send('No hay productos')
}

    //mostrar segun la cantidad que se indique
        for(let i = 0; i < cant; i++){
        productos.push(producto) 
}
    res.send(productos)

    //Si no existe creame 10 objetos
        if(!cant){
        for(let i=0 ; i<10 ; i++ ){
        productos.push(producto)  
    }
    res.send(productos)
}


})

app.listen(3333,() =>{
    console.log('Running')
})