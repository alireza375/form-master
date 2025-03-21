import React from 'react';

import Dad from '../Dad/Dad';
import Aunty from '../Aunty/Aunty';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';

const Grandpa = () => {
    const asset = 'Diamond';
    return (
        <div className="grandpa"> 
            <h1>Grandpa</h1>
            <section className="flex">
                <Dad asset={asset}></Dad>
                <Aunty></Aunty>
                <Uncle asset={asset}></Uncle>
            </section>
        </div>
    );
};

export default Grandpa;