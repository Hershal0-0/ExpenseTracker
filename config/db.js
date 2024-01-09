const mongoose=require("mongoose")

const connectDB = async ()=>{
    try {
        const conn= await mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@practice.mwmwz.mongodb.net/expense_tracker?retryWrites=true&w=majority`, {
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true
        })
        console.log(`MongoDB Connected:${conn.connection.host}`.cyan.underline)
    } catch (err) {
        console.log(`Error: ${err.message}`.red)
        process.exit(1)
    }
}

module.exports=connectDB