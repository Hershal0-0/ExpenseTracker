const mongoose= require("mongoose")

const TransactionSchema= new mongoose.Schema({
    text:{
        type: String,
        trim: true,
        required: [true,'Pls Add Some Text']
    },
    amount:{
        type: Number,
        required: [true,'Pls add a Positive or Negative Number']
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports=mongoose.model("Transaction",TransactionSchema)