import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name="Mamun"></Cousin>
                <Cousin name="Jamun"></Cousin>
            </section>
        </div>
    );
};

export default Uncle;