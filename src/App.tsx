import React, {useState} from 'react';
import a from './App.module.css'
import {FirstCounter} from "./components/First_Counter/first_Counter";

function App() {

    const [value, setValue]=useState(0)


    return (
        <div className={a.wrapper}>
            <FirstCounter value={value} setValue={setValue}/>
        </div>
    );
}

export default App;
