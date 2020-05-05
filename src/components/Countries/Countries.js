import React from 'react';

import Papa from 'papaparse';
import data from '../../resource/data_csv.csv'

import Location from '../Location/Location';

import './Countries.css';

function Countries(props) {
    var allText = '';

    function readTextFile(file) {
        var rawFile = new XMLHttpRequest();
        rawFile.open('GET', file, false);
        rawFile.onreadystatechange = () => {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile === 0) {
                    allText = rawFile.responseText;
                }
            }
        };
        rawFile.send(null);
    }
    readTextFile(data);

    var countries = {
        information: [...Papa.parse(allText, { header: true }).data]
    };
    console.log(countries);

    return (
        <div className='container'>
            {countries.information.map(country => {
                return (
                    <div key={country.Name} className='LocationElement'>
                        <Location location={country.Name} code={country.Code} />
                    </div>);
            })}
        </div>
    );
}

export default Countries;
