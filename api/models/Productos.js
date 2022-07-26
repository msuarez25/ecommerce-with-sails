/**
 * Productos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    nombre: {
      type: "string",
    },
    code: {
      type: "string",
    },
    precio: {
      type: "string",
    },
    foto: {
      type: "string",
    },
    timestamp: {
      type: "string",
    },
    stock: {
      type: "number",
    },
    amount: {
      type: "number",
    },
  },
};
