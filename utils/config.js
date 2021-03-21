require('dotenv').config()

let PORT = process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI
let FIREBASE_URI = process.env.FIREBASE_URI
let NODE_ENV  = process.env.NODE_ENV

module.exports = {
    MONGODB_URI,
    PORT,
    FIREBASE_URI,
    NODE_ENV
}