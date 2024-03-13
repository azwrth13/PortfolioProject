// Models for the Option Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Databse for options has failed to connect.' });
    } else  {
        console.log('Success: Database for options has connected!');
    }
});

// SCHEMA: Define the collection's schema.
const optionSchema = mongoose.Schema({
	ticker:    { type: String, required: true },
	strikePrice:     { type: Number, required: true },
	expiration: { type: Date, required: true }
});

// Compile the model from the schema 
// by defining the collection name "options".
const options = mongoose.model('options', optionSchema);


// CREATE model *****************************************
const createOption = async (ticker, strikePrice, expiration) => {
    const option = new options({ 
        ticker: ticker, 
        strikePrice: strikePrice, 
        expiration: expiration 
    });
    return option.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveOptions = async () => {
    const query = options.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveOptionByID = async (_id) => {
    const query = options.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteOptionById = async (_id) => {
    const result = await options.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateOption = async (_id, ticker, strikePrice, expiration) => {
    const result = await options.replaceOne({_id: _id }, {
        ticker: ticker,
        strikePrice: strikePrice,
        expiration: expiration
    });
    return { 
        _id: _id, 
        ticker: ticker,
        strikePrice: strikePrice,
        expiration: expiration 
    }
}

// EXPORT the variables for use in the controller file.
export { createOption, retrieveOptions, retrieveOptionByID, updateOption, deleteOptionById }