const express=require("express")
const dotenv =require("dotenv")
const colors =require("colors")
const morgan = require("morgan")
const path = require('path')

dotenv.config({path:"./config/config.env"})

// MongoDB database connection
const connectDB=require("./config/db")
connectDB()

// Getting the Routes
const transactions = require("./routes/transactions")

const app=express()

// Body Parser Middleware
app.use(express.json())

if(process.env.NODE_ENV === "development"){
    app.use(morgan('dev'))
}

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "client", "build")));
    app.get('/page', (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"))
    });
    console.log("Running production");
}

app.use("/api/v1/transactions",transactions)
// git changes

const PORT=process.env.PORT || 5000

app.listen(PORT,console.log(`Server Running in ${process.env.NODE_ENV} Mode on port ${PORT}`.blue.bold))