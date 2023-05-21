const products = [
    {id: 1, name:'Sillon Ivory', description:'Medidas Standar', stock:'number',Image:"https://i2.wp.com/diforteliving.com.ar/wp-content/uploads/2022/10/9d6a2933-4d74-4bb7-ae5c-d590354fdc20.jpg?fit=320%2C320&ssl=1"},
    {id: 2, name:'Sillon Mv Esquinero', description:'5mts x 5mts', stock:'number'},
    {id: 3, name:'Sillon Escandinado', description:'Estilo Natural', stock:'number'},
    {id: 4, name:'Sillon Lemon Crush', description:'Maquiaveli', stock:'number'}
  ]

const getProducts = ( ) => {
    const promise = new Promise ((resolve) => {
        return resolve(products)
    } )
}