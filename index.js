const express = require('express')
const session = require('express-session');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { db } = require('./db/db')
const { readdirSync } = require('fs')
const app = express()
require('dotenv').config()
const BASE_URL = process.env.BASE_URL
const PORT = process.env.PORT || 3000
app.use(cors({
    origin: BASE_URL,
    credentials: true,
}));
app.set("trust proxy", 1);
app.use(express.json())


app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "session",
    cookie: {
        expires: new Date(Date.now() + 25892000000),
        sameSite: "none",
        secure: true,
    }
}))

app.use(cookieParser())

readdirSync('./routes').map((route) => app.use('/api', require('./routes/' + route)))

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log(`You are listening to port : ${PORT}`)
    })

}
server()