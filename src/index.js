import React from 'react'
import { createRoot } from 'react-dom/client';
import CounterApp from './CounterApp';
import './index.css';

const divRoot = document.querySelector('#root');
const root = createRoot(divRoot);

root.render(<CounterApp numero={123} />);
//antes 
// import React from 'react';
// import ReactDOM from 'react-dom';
// // import PrimeraApp from './PrimeraApp';
// import CounterApp from './CounterApp';
// import './index.css';

// // const saludo = <h1>hola mundo</h1>;
// const divRoot = document.querySelector('#root');

// ReactDOM.render(<CounterApp numero={123} />,divRoot);