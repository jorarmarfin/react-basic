import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';

// const saludo = <h1>hola mundo</h1>;
const divRoot = document.querySelector('#root');

ReactDOM.render(<CounterApp numero={123} />,divRoot);