import React from 'react';

const PrimeraApp = ()=>{
    const saludo = 'Hola mundo const';
    const numeros = 123;
    const decimal = 123.123;
    const boleano = true; //No lo mostro
    const arreglo = [1,2,3,4]; //Lo mostro concatenado 1234
    const persona = {
        nombre:'Luis',
        edad:42
    }//JSON.stringify(persona)

    return (
        <>
            <h1>{ saludo }</h1>
            <p>a ver si se puede</p>
        </>
    );
}

export default PrimeraApp;