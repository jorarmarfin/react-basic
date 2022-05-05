import React from 'react';
import PropTypes from 'prop-types'
const PrimeraApp = ({saludo,subtitulo})=>{
    

    return (
        <>
            <h1>{ saludo }</h1>
            <p>{ subtitulo }</p>
        </>
    );
}

PrimeraApp.prototypes = { 
    saludo : PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo:'Soy otro subtitulo'
}

export default PrimeraApp;