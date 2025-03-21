import React, { useContext } from 'react';
import { AssetContext } from '../Grandpa/Grandpa';

const Special = ({asset}) => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Special Person</h2>
            <p>{asset} passed from grandpa</p>
            <p>Also has: {gift}</p>
        </div>
    );
};

export default Special;