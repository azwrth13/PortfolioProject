import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { FaDeleteLeft } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";


function Option({ option, onEdit, onDelete }) {
    return (
        <tr>
            <td>{option.ticker}</td>
            <td>{option.strikePrice}</td>
            <td>{option.expiration.slice(0,10)}</td>

            {/* Update these icons to something that matches your style. */}
            <td><FaDeleteLeft className="hoverButton" onClick={() => onDelete(option._id)} /></td>
            <td><FaEdit className="hoverButton" onClick={() => onEdit(option)} /></td>
        </tr>
    );
}

export default Option;