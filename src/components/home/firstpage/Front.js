import React from 'react';
import Camping from '../../Kidsection/Camping';
import Onesection from '../../OneSection/Onesection';
import Carousol from '../Carousol/Carousol';
import Services from '../services/Services';

const Front = () => {
    return (
        <div>
            <Carousol></Carousol>

            <Services></Services>
            <Onesection></Onesection>
            <Camping></Camping>

        </div>
    );
};

export default Front;