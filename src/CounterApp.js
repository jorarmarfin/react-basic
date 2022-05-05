import React,{ useState } from 'react';
import PropTypes from 'prop-types'

const CounterApp = ({numero})=>{
    const [ counter,setCounter ] = useState(numero);


    const handleAdd = (e)=>{
        // setCounter(counter+1);
        setCounter( (c)=>c+1);
    }
    
    const handleRes = (e)=>{
        setCounter(counter-1);
    }
    
    const resetear = (e)=>{
        setCounter( (c)=>c=numero);
    }



    return (
        <>
        <h1>Counter App</h1>
        <p>{ counter }</p>
        <button onClick={ handleAdd }>+1</button>
        <button onClick={ resetear }>reset</button>
        <button onClick={ handleRes }>-1</button>
        </>
    );

}

CounterApp.Prototypes = {
    numero: PropTypes.number
}

export default CounterApp;
