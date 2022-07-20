require('dotenv').config();
const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASSWORD;
module.exports = {
    services: {
        nasa: {
            basepath: "https://api.nasa.gov",
            apod: "/planetary/apod"
        }
    },
    dataBase: {
        host: `mongodb+srv://${mongoUser}:${mongoPass}@cluster0.lkptu.mongodb.net/?retryWrites=true&w=majority`
    }
}