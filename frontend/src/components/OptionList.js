import React from 'react';
import Option from './Option';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function OptionList({ options, onDelete, onEdit }) {
    return (
        <table id="options">
            <caption>Delete and edit option contracts.</caption>
            <thead>
                <tr>
                    <th>Ticker</th>
                    <th>Strike Price</th>
                    <th>Expiration</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {options.map((option, i) => 
                    <Option 
                        option={option} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default OptionList;
