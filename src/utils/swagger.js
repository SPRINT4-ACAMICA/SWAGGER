export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "PROYECTO FINAL",
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
        name: "Login",
        description: "Todos los usuarios del sistema - Login",
      },
      {
        name: "Productos",
        description: "Todos los productos del sistema",
      },
      {
        name: "Pedidos",
        description: "Para que los usuarios creen pedidos",
      },
      {
        name: "mercadoPago",
        description: "Para que los usuarios vean los pedidos",
      },
    ],
    paths: {
      "/usuarios": {
        get: {
          tags: ["Usuarios"],
          summary: "Consultar todos los usuarios",
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
      "/Login": {
        post: {
          tags: ["Login"],
          summary: "Para que los usuarios inicien sesión y obtengan el token",
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
      "/Eliminar/{id}": {
        delete: {
          tags: ["Login"],
          summary: "Para eliminar usuarios del sistema",
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
          summary: "Ver todos los productos",
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
          summary: "Para crear productos",
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
            "Para editar productos",
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
          summary: "Para eliminar productos",
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
      "/pedidos/Crear": {
        post: {
          tags: ["Pedidos"],
          summary: "Para empezar a llenar el esquema de pedidos",
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
      "/pedidos/Ordenar/{id}": {
        post: {
          tags: ["Pedidos"],
          summary: "Para que los usuarios terminen de crear sus pedidos en el sistema",
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
      "/pedidos/Editar/{id}": {
        put: {
          tags: ["Pedidos"],
          summary: "Para que los usuarios editen sus pedidos",
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
      "/pedidos/Eliminar/{id}": {
        delete: {
          tags: ["Pedidos"],
          summary: "Para eliminar pedidos",
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
      "/mercadopago/orders": {
        get: {
          tags: ["mercadoPago"],
          summary: "Para ver todos los pedidos realizados y poder pagarlos",
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
    },
    security: [
      {
        "bearerAuth": [],
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
            "correo",
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
            contraseña: {
              type: "string",
              example: "111111",
            },
          },
        },
        UsuarioLogin: {
          type: "object",
          required: ["correo", "contraseña"],
          properties: {
            correo: {
              type: "string",
              example: "j@gmail.com",
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
          required: ["nombres", "cantidades"],
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
          },
        },
      },
    },
  },
  apis: ["./src/routes*.js"],
};
