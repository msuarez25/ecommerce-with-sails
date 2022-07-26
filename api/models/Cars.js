/**
 * Cars.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    timestamp: {
      type: "string",
    },
    user: {
      type: "string",
    },
    productos: {
      type: "json",
      columnType: "array",
    },
  },
};
