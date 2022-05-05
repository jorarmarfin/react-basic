import React from 'react';
import PropTypes from 'prop-types'

const CounterApp = ({numero})=>{
    return (
        <>
        <h1>Counter App</h1>
        <p>{ numero }</p>
        </>
    );

}
CounterApp.Prototypes = {
    numero: PropTypes.number
}

export default CounterApp;
