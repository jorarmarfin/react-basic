import React from 'react';
import PropTypes from 'prop-types'

const CounterApp = ({numero})=>{
    const handleAdd = (e)=>{
        console.log(e)
    }
    return (
        <>
        <h1>Counter App</h1>
        <p>{ numero }</p>
        <button onClick={ handleAdd }>+1</button>
        </>
    );

}

CounterApp.Prototypes = {
    numero: PropTypes.number
}

export default CounterApp;
