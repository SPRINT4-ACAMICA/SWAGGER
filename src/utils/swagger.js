export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TERCER SPRINT",
      version: "1.0.0",
    },
    servers: [
      {
        url: "https://api.apicommerce.tk",
        description: "Servidor local",
      },
    ],
    tags: [
      {
        name: "Usuarios",
        description: "Todos los usuarios del sistema",
      },
      {
        name: "Productos",
        description: "Todos los productos del sistema",
      },
      {
        name: "Pedidos",
        description: "Todos los pedidos de los usuarios",
      },
    ],
    paths: {
      "/usuarios": {
        get: {
          tags: ["Usuarios"],
          summary: "Todos los usuarios del sistema",
          description: "Todos los usuarios registrados en el sistema",
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Usuario",
                  },
                },
              },
            },
          },
        },
      },
      "/usuarios/nuevos": {
        post: {
          tags: ["Usuarios"],
          summary: "Para crear nuevos usuarios en el sistema",
          description: "Crear usuarios",
          security: [],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Usuario",
                },
              },
            },
          },
          responses: {
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            201: {
              description: "Created",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/usuarios/Login": {
        post: {
          tags: ["Usuarios"],
          summary: "Para que los usuarios inicien sesión",
          description: "Iniciar sesión",
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UsuarioLogin",
                },
              },
            },
          },
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            401: {
              description: "Unauthorized",
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            404: {
              description: "Not Found",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/usuarios/Eliminar/{id}": {
        delete: {
          tags: ["Usuarios"],
          summary: "Para que los administradores eliminen usuarios del sistema",
          description: "Para eliminar alguno de los usuarios existentes",
          parameters: [
            {
              in: "path",
              name: "id",
              description: "Identificador del usuario",
              required: true,
              schema: {
                type: "string",
                example: "600b365c79bdd616403fc73b",
              },
            },
          ],
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            401: {
              description: "Unauthorized",
            },
          },
        },
      },
      "/productos": {
        get: {
          tags: ["Productos"],
          summary: "Ver todos los productos del sistema",
          description: "Ver los productos registrados en el sistema",
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Producto",
                  },
                },
              },
            },
            404: {
              description: "No Content",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/productos/nuevos": {
        post: {
          tags: ["Productos"],
          summary: "Para que los administradores creen productos en el sistema",
          description: "Crear nuevos productos",
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Producto",
                },
              },
            },
          },
          responses: {
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            201: {
              description: "Created",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            401: {
              description: "Unauthorized",
            },
          },
        },
      },
      "/productos/{id}": {
        put: {
          tags: ["Productos"],
          summary:
            "Para que los administradores editen productos en el sistema",
          description: "Para editar propiedades de los productos existentes",
          parameters: [
            {
              in: "path",
              name: "id",
              required: true,
              schema: {
                type: "string",
                example: "600b365c79bdd616403fc73a",
              },
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Producto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            401: {
              description: "Unauthorized",
            },
          },
        },
      },
      "/productos/Eliminar/{id}": {
        delete: {
          tags: ["Productos"],
          summary:
            "Para que los administradores eliminen productos del sistema",
          description: "Para eliminar alguno de los productos existentes",
          parameters: [
            {
              in: "path",
              name: "id",
              description: "Identificador del producto",
              required: true,
              schema: {
                type: "string",
                example: "600b365c79bdd616403fc73b",
              },
            },
          ],
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            401: {
              description: "Unauthorized",
            },
          },
        },
      },
      "/mercadopago/orders": {
        get: {
          tags: ["Pedidos"],
          summary:
            "Para que los administradores y usuarios vean todos los pedidos realizados",
          description:
            "Los administradores y usuarios podrán ver todos los pedidos registrados en el sistema",
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Pedido",
                  },
                },
              },
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            401: {
              description: "Unauthorized",
            },
          },
        },
      },
      "/mercadopago/Crear": {
        post: {
          tags: ["Pedidos"],
          summary: "Para empezar a llenar el esquema de pedidos",
          description: "Para empezar a llenar datos",
          responses: {
            201: {
              description: "Created",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            401: {
              description: "Unauthorized",
            },
          },
        },
      },
      "/mercadopago/Ordenar/{id}": {
        post: {
          tags: ["Pedidos"],
          summary:
            "Para que los usuarios terminen de crear sus pedidos en el sistema",
          description: "Para terminar de crear el pedido",
          parameters: [
            {
              in: "path",
              name: "id",
              required: true,
              schema: {
                type: "string",
                example: "600b365c79bdd616403fc73a",
              },
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Pedido",
                },
              },
            },
          },
          responses: {
            201: {
              description: "Created",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/mercadopago/Editar/{id}": {
        put: {
          tags: ["Pedidos"],
          summary:
            "Para que los usuarios editen pedidos mientras no los hayan confirmado",
          description: "Para editar propiedades de los pedidos existentes",
          parameters: [
            {
              in: "path",
              name: "id",
              required: true,
              schema: {
                type: "string",
                example: "600b365c79bdd616403fc73a",
              },
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Pedido",
                },
              },
            },
          },
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/mercadopago/Eliminar/{id}": {
        delete: {
          tags: ["Pedidos"],
          summary: "Para que los administradores eliminen pedidos del sistema",
          description: "Para eliminar alguno de los pedidos existentes",
          parameters: [
            {
              in: "path",
              name: "id",
              description: "Identificador del producto",
              required: true,
              schema: {
                type: "string",
                example: "600b365c79bdd616403fc73b",
              },
            },
          ],
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
        },
      },
      schemas: {
        Usuario: {
          type: "object",
          required: [
            "nombre",
            "apellido",
            "correo",
            "telefono",
            "direccion",
            "contraseña",
          ],
          properties: {
            nombre: {
              type: "string",
              example: "Jaao",
            },
            apellido: {
              type: "string",
              example: "A",
            },
            correo: {
              type: "string",
              example: "j@gmail.com",
            },
            telefono: {
              type: "number",
              example: 311111,
            },
            direccion: {
              type: "string",
              example: "Hospital",
            },
            contraseña: {
              type: "string",
              example: "111111",
            },
            administrador: {
              type: "boolean",
              example: false,
            },
          },
        },
        UsuarioLogin: {
          type: "object",
          required: ["correo", "contraseña"],
          properties: {
            correo: {
              type: "string",
              example: "j.j@gmail.com",
            },
            contraseña: {
              type: "string",
              example: "111111",
            },
          },
        },
        Producto: {
          type: "object",
          required: ["nombre", "precio"],
          properties: {
            nombre: {
              type: "string",
              example: "Cerveza",
            },
            precio: {
              type: "number",
              example: 4000,
            },
          },
        },
        Pedido: {
          type: "object",
          required: ["nombres", "cantidades", "estado"],
          properties: {
            nombres: {
              type: "array",
              items: {},
              example: ["Hamburguesa", "Coca cola"],
            },
            cantidades: {
              type: "array",
              items: {},
              example: [3, 2],
            },
            estado: {
              type: "string",
              example: "Abierto",
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes*.js"],
};
