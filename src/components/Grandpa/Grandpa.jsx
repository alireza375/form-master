import React, { createContext, useState } from 'react';

import Dad from '../Dad/Dad';
import Aunty from '../Aunty/Aunty';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';

export const AssetContext = createContext();
export const MoneyContext = createContext();
const Grandpa = () => {
    const [money, setMoney] = useState(1000);
    const asset = 'Diamond';
    return (
        <div className="grandpa"> 
            <h1>Grandpa</h1>
            <p>Net money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value='gold'>
                    <section className="flex">
                        <Dad asset={asset}></Dad>
                        <Aunty></Aunty>
                        <Uncle asset={asset}></Uncle>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;