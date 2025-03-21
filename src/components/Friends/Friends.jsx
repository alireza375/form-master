import React, { useContext } from 'react';
import { AssetContext } from '../Grandpa/Grandpa';

const Friends = () => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <section>
                <h2>Friends</h2>
                <p>also has: {gift}</p>
            </section>
        </div>
    );
};

export default Friends;