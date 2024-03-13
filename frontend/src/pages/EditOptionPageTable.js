import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";
import { HiDocumentChartBar } from "react-icons/hi2";

export const EditOptionPageTable = ({ optionToEdit }) => {
 
    const [ticker, setTicker]       = useState(optionToEdit.ticker);
    const [strikePrice, setStrikePrice]         = useState(optionToEdit.strikePrice);
    const [expiration, setExpiration] = useState(optionToEdit.expiration);
    
    const redirect = useNavigate();

    const editOption = async () => {
        const response = await fetch(`/options/${optionToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                ticker: ticker, 
                strikePrice: strikePrice, 
                expiration: expiration
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Your edit has successfuly been committed to the list.`);
        } else {
            const errMessage = await response.json();
            alert(`There has been an error editing this contract, please try again. ${response.status}. ${errMessage.Error}`);
        }
        redirect("/OptionsPage");
    }

    return (
        <main className= "List">
        <article>
            <h2>Edit a contract<HiDocumentChartBar className="icn"/></h2>
            <p>Use the form below to edit the details of your contract and have it updated on the list.</p>
            <table id="options">
                <caption>Edit your option contract below.</caption>
                <thead>
                    <tr>
                        <th>Ticker</th>
                        <th>Strike Price</th>
                        <th>Expiration</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="ticker"></label>
                        <input
                            type="text"
                            placeholder="e.g. AAPL"
                            value={ticker}
                            onChange={e => setTicker(e.target.value)} 
                            id="ticker" />
                    </td>

                    <td><label for="strikePrice"></label>
                        <input
                            type="number"
                            value={strikePrice}
                            placeholder="e.g. 13.00"
                            onChange={e => setStrikePrice(e.target.value)} 
                            id="strikePrice" />
                    </td>

                    <td><label for="expiration"></label>
                        <input
                            type="date"
                            value={expiration}
                            onChange={e => setExpiration(e.target.value)} 
                            id="expiration" />
                    </td>

                    <td>
                    <label for="submit"></label>
                        <button
                            type="submit"
                            onClick={editOption}
                            id="submit"
                        >Save</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </main>
    );
}
export default EditOptionPageTable;