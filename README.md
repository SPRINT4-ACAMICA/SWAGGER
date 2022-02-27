# PROYECTO FINAL

Encontrarás funciones como:

* Observar todos los usuarios registrados.
* Crear un nuevo usuario.
* Iniciar sesión con los usuarios nuevos.
* Ver todos los productos disponibles y sus precios.
* Crear, editar y eliminar productos.
* Crear pedidos y pagarlos.

# Comienzo 🚀

Para iniciar sesión en [Amazon Web Services](https://aws.amazon.com/es/console/) 

|       Nombre de usuario       |    contraseña   |    ID de cuenta   |
|-------------------------------|-----------------|-------------------|
|     jimalaros25@gmail.com     |   J-i-m-m-y-3   |   168415732896    | 

## Instalación 🔧

_Estas instrucciones te permitirán correr el proyecto y realizar las pruebas correspondientes._

_En caso de querer levantar una instancia en la cuenta de Amazon para correr desde 0, levantar la instancia desde la AMI llamada SWAGGER y seguir el siguiente paso a paso_

1. Descargar el archivo .pem adjunto en este repositorio.

2. Correr la terminal desde donde tengas descargado el archivo .pem, por ejemplo, si el archivo lo descargas en escritorio debes moverte a la carpeta de escritorio de la siguiente manera:

```
cd '/c/Users/.../Desktop'
```

Siendo los ... el nombre de usuario que tengas en tu computadora.

3. Una vez dentro de la carpeta donde tengas el archivo .pem tendrás que correr el siguiente comando:

```
ssh ubuntu@... -i Keys.pem
```

Siendo los ... la dirección IPv4 pública de la instancia de amazon, por ejemplo, si la dirección IPv4 pública de la instancia de amazon es 44.202.101.186, ejecutarás el comando de la siguiente manera:

```
ssh ubuntu@44.202.101.186 -i Keys.pem
```

4. Una vez ejecutado el comando anterior, tendrás que entrar a las carpetas donde esta alojado el proyecto, de la siguiente manera:

```
cd PROYECTOFINAL
```

5. Para visualizar el contenido del proyecto una vez dentro de la carpeta PROYECTOFINAL, ejecuta el siguiente comando:

```
cd SWAGGER
```

Una vez dentro de SWAGGER...

```
pm2 start src/index.js --watch
```

6. Para visualizar el back del proyecto, entra en el siguiente [link](https://api.apicommerce.tk/api)

Para visualizar el front del proyecto, entra en el siguiente [link](https://apicommerce.tk)

_En caso de no levantar una instancia en la cuenta de Amazon para correr desde 0, dirigirse a los links anteriormente mencionados y continuar con las siguientes indicaciones_
### Ruta de USUARIOS

_Para iniciar sesión cuentas con dos opciones, en el siguiente [link](https://apicommerce.tk/login.html) podrás iniciar sesión (colocar correo, contraseña y darle clic a cualquiera de los IDP´s ) para obtener el token si el usuario se encuentra registrado en la base de datos, de no encontrarse registrado, no obtendrás un token, pero el usuario quedará registrado, podrás llenar los campos nuevamente para obtener el token, o podrás iniciar sesión en SWAGGER en la ruta de Login_.

_El token lo podrás encontrar en consola_.
### Ruta PEDIDOS

_Para crear los pedidos, se trabajo con un concepto denominado nested documents, por lo cuál tendrás que haber ingresado el token en el campo de SWAGGER denominado "Authorize" y en la ruta Crear (Pedidos) darle ejecutar, no tienes que enviar un body, haciendo esto obtendrás algo como lo siguiente:_

```
{
    "_id":600b365c79bdd616403fc73b,
    "nombre":"j@gmail.com",
    "pedidos": []
}
```

_Para llenar el array vacío de productos, tendrás que pasarle el id generado anteriormente y llenar el siguiente esquema en el body de la ruta Ordenar:_

```
{
    "nombres":["Hamburguesa doble", "Coca-cola"],
    "cantidades":[2,2]
}
```

De la siguiente manera: 

* Para el body, el vector "nombres" se puede llenar con tantos nombres de productos como se desee, siempre y cuando estos existan dentro de la lista de productos, también es importante recalcar que se debe respetar la escritura, cualquier producto escrito de mala manera, hará que el programa presente un error del tipo: _cannot calculated price of undefined_.

_Para encontrar los productos que están almacenados, debes dirigirte al "get" que encontrarás en productos, si quieres crear otro u otros, tienes la libertad para hacerlo_.

* El vector "nombres" tiene que tener la misma longitud del vector "cantidades", es decir, cada producto escrito en el vector "nombres" debe tener su cantidad correspondiente.

* IMPORTANTE: Para pagar los pedidos es obligatorio ejecutar el endpoint de mercadopago/orders, una vez ejecutado, en el siguiente [link](https://apicommerce.tk/pago.html) se encontrará con el botón de mercadopago, el cuál esta programado para pagar el último pedido realizado.

* IMPORTANTE: Para pagar los pedidos tienes que tener la sesión iniciada en la cuenta de [mercado pago developers colombia](https://www.mercadolibre.com/jms/mco/lgz/login?platform_id=mp&go=https://www.mercadopago.com.co/developers/es/guides), con los siguientes datos...

|               Correo                   |    contraseña   |
|----------------------------------------|-----------------|
|     test_user_88753197@testuser.com    |    qatest6807   |

_Una vez dentro de mercadopago, podrás colocar las cuotas que decidas y el código de la tarjeta de credito es 1234_

_Recordatorio_

Datos de acceso a AWS:

|       Nombre de usuario       |    contraseña   |    ID de cuenta   |
|-------------------------------|-----------------|-------------------|
|     jimalaros25@gmail.com     |   J-i-m-m-y-3   |   168415732896    | 
## Construido con 🛠️

* NodeJS
* Express
* Swagger
* JWT
* AWS
* Docker
## Autores ✒️

* **Jimmy Alexander Arango Ossa** - *Link* - [jimalaros](https://github.com/SPRINT4-ACAMICA)
