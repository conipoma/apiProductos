# apiProductos
Microservicio de producto

## Despliegue
La aplicación esta desplegada en Azure quedando en esta dirección: 

https://desafiowalmartapi.azurewebsites.net


## Despliegue local
Para correr la Api de deben hacer los siguientes pasos: 

```
npm install 
```

```
node server.js
```
La aplicación por defecto se va a desplegar en el puerto 3000. 


## Rutas
Existen dos rutas: 
### GET /products

Endpoint para devolver todos los productos de la base de datos
Resultado:

```
[
    {
        "_id": "607d1e947dba6c7efb107dc0",
        "id": 1,
        "brand": "ooy eqrceli",
        "description": "rlñlw brhrka",
        "image": "",
        "price": 498724
    }
]
```

### GET /products/{searchString}

Endpoint para buscar uno o más productos. Si es por Id de productos se retornará el resultado exacto, es decir, un producto. 

```
    {
        "_id": "607d1e947dba6c7efb107dc0",
        "id": 1,
        "brand": "ooy eqrceli",
        "description": "rlñlw brhrka",
        "image": "",
        "price": 498724
    }

```

Si es por texto se retornará una lista de productos con todos aquellos cuya marca o descripción tengan alguna coincidencia con el string de búsqueda. 

### Descuentos
Aquellas búsquedas que sean palíndromas los elementos encontrados se retornarám con el 50% de descuento y se agregarán atributos nuevos a los elementos retornados. 

```
{
    "_id": "607d1ea37dba6c7efb107df6",
    "id": 55,
    "brand": "dassad",
    "description": "zdczs omedat",
    "image": "www.lider.cl/catalogo/images/electronicsIcon.svg",
    "price": 493408.5,
    "promotion": true,
    "originalPrice": 986817
}
```

### Deuda tácnica
- Pruebas automáticas.
- Parametrización de conexión a Mongodb. 