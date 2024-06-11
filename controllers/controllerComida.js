const comidas = [
    {
        id: 1, 
        nombre: "Pizza", 
        ingredientes : ["Queso", "Masa", "Tomate", "Salsa"]
    }, 
    {
        id: 2, 
        nombre: "Pollo con Tajadas", 
        ingredientes : ["Pechuga de Pollo", "Ensalada", "Aderezos", "Tajaditas"]
    }
];


const getComidas = ( req, res  )=>{


    res.json(comidas);


};



export {
    getComidas
}