require("dotenv").config();


module.exports = {
    env: {
        apiKey : process.env.apiKey,
        authDomain : process.env.authDomain,
        projectId : process.env.projectId,
        storageBucket : process.env.storageBucket,
        messagingSenderId : process.env.messagingSenderId,
        appId : process.appId,
        measurementId : process.env.measurementId
    },
}