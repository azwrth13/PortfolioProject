import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import OptionList from '../components/OptionList';
import { Link } from 'react-router-dom';
import { AiFillFileAdd } from "react-icons/ai";
import { HiDocumentChartBar } from "react-icons/hi2";

function OptionsPage({ setOption }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [options, setOptions] = useState([]);

    // RETRIEVE the entire list of options
    const loadOptions = async () => {
        const response = await fetch('/options');
        const options = await response.json();
        setOptions(options);
    } 
    

    // UPDATE a single option
    const onEditOptions = async option => {
        setOption(option);
        redirect("/update");
    }


    // DELETE a single option  
    const onDeleteOption = async _id => {
        const response = await fetch(`/options/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/options');
            const options = await getResponse.json();
            setOptions(options);
        } else {
            console.error(`The contract has not been deleted = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the options
    useEffect(() => {
        loadOptions();
    }, []);

    // DISPLAY the options
    return (
        <main className="List">
            <h2>List of Option Contracts<HiDocumentChartBar className="icn"/></h2>
            <p>This page contains an options contract list. You can add, edit, and delete using the icons below.</p>
            <p className = "addButton">Add an Option Contract&nbsp;    
            <Link to="/create"><AiFillFileAdd></AiFillFileAdd></Link>
            </p>
            <OptionList 
            
                options={options} 
                onEdit={onEditOptions} 
                onDelete={onDeleteOption} 
            />
        </main>
    );
}

export default OptionsPage;