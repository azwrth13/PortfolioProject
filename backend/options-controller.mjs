// Controllers for the option Collection

import 'dotenv/config';
import express from 'express';
import * as options from './options-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/options', (req,res) => { 
    options.createOption(
        req.body.ticker, 
        req.body.strikePrice, 
        req.body.expiration
        )
        .then(option => {
            console.log(`"${option.ticker}" was added to the list of contracts.`);
            res.status(201).json(option);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Option creation failed. Ensure all required fields are provided and valid.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/options', (req, res) => {
    options.retrieveOptions()
        .then(options => { 
            if (options !== null) {
                console.log(`All options were retrieved from list of contracts.`);
                res.json(options);
            } else {
                res.status(404).json({ Error: 'The page you are looking for does not exist.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Failed to retrieve options. Please verify your request parameters.' });
        });
});


// RETRIEVE by ID controller
app.get('/options/:_id', (req, res) => {
    options.retrieveOptionByID(req.params._id)
    .then(option => { 
        if (option !== null) {
            console.log(`"${option.ticker}" was retrieved, based on its ID.`);
            res.json(option);
        } else {
            res.status(404).json({ Error: 'Option with the specified ID not found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Invalid request. Please check the option ID and try again.' });
    });

});


// UPDATE controller ************************************
app.put('/options/:_id', (req, res) => {
    options.updateOption(
        req.params._id, 
        req.body.ticker, 
        req.body.strikePrice, 
        req.body.expiration
    )
    .then(option => {
        console.log(`"${option.ticker}" was updated.`);
        res.json(option);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Option could not be updated.' });
    });
});


// DELETE Controller ******************************
app.delete('/options/:_id', (req, res) => {
    options.deleteOptionById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} option was deleted.`);
                res.status(200).send({ Success: 'Option deleted successfully.' });
            } else {
                res.status(404).json({ Error: 'No option found with the provided ID.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'An error occurred while attempting to delete the option. Please try again.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});