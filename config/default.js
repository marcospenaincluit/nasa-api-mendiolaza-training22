require('dotenv').config();
const mongoUser = process.env.INCLUIT_TRAINING_MONGO_USER;
const mongoPass = process.env.INCLUIT_TRAINING_MONGO_PASSWORD;
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