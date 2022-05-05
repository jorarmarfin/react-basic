import React from 'react';
import PropTypes from 'prop-types'
const PrimeraApp = ({saludo})=>{
    

    return (
        <>
            <h1>{ saludo }</h1>
            <p>a ver si se puede</p>
        </>
    );
}

PrimeraApp.prototypes = { 
    saludo : PropTypes.string.isRequired
}

export default PrimeraApp;