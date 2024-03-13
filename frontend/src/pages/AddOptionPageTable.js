import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { HiDocumentChartBar } from "react-icons/hi2";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddOptionPageTable = () => {

    const [ticker, setTicker]       = useState('');
    const [strikePrice, setStrikeprice]         = useState('');
    const [expiration, setExpiration] = useState('');
    
    const redirect = useNavigate();

    const addOption = async () => {
        const newOption = { ticker, strikePrice, expiration };
        const response = await fetch('/options', {
            method: 'post',
            body: JSON.stringify(newOption),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`The contract has been successfully added.`);
        } else {
            alert(`The contract could not be added, please try again. = ${response.status}`);
        }
        redirect("/OptionsPage");
    };


    return (
        <main className = "List">
        <article>
            <h2>Add a contract <HiDocumentChartBar className="icn"/></h2>
            <p>Use the form below to enter the details of your contract and add it to the list.</p>
            
            <table id="options">
                <caption>Add your option contract.</caption>
                <thead>
                    <tr>
                        <th>Ticker</th>
                        <th>Strike Price</th>
                        <th>Expiration</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label htmlFor="ticker"></label>
                        <input
                            type="text"
                            placeholder="e.g. NVDA"
                            value={ticker}
                            onChange={e => setTicker(e.target.value)} 
                            id="ticker" />
                    </td>

                    <td><label htmlFor="strikePrice"></label>
                        <input
                            type="number"
                            value={strikePrice}
                            placeholder="e.g. 450"
                            min ="0"
                            onChange={e => setStrikeprice(e.target.value)} 
                            id="strikePrice" />
                    </td>

                    <td><label htmlFor="expiration"></label>
                        <input
                            type="date"
                            placeholder="Expiration"
                            value={expiration}
                            onChange={e => setExpiration(e.target.value)} 
                            id="expiration" />
                    </td>

                    <td>
                    <label htmlFor="submit"></label>
                        <button
                            type="submit"
                            onClick={addOption}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </main>
);
}

export default AddOptionPageTable;