/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    userName: {
      type: "string",
    },
    password: {
      type: "string",
    },
    firstName: {
      type: "string",
    },
    lastName: {
      type: "string",
    },
    email: {
      type: "string",
    },
    countryCode: {
      type: "string",
    },
    phone: {
      type: "string",
    },
    address: {
      type: "string",
    },
    age: {
      type: "number",
    },
    foto: {
      type: "string",
    },
  },
};
