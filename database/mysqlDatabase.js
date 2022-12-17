"user strict";
require("dotenv").config()
const connection = {
    host: "localhost",
    user: process.env.user,
    password: process.env.pass, 
    database: "Grab",
};

module.exports = connection;