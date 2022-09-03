import React, {useState} from 'react';
import a from './App.module.css'
import {FirstCounter} from "./components/First_Counter/first_Counter";

function App() {

    let [value, setValue]=useState(0)

    return (
        <div className={a.wrapper}>
            <FirstCounter value={value}/>
        </div>
    );
}

export default App;
