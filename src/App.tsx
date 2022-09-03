import React, {useState} from 'react';
import a from './App.module.css'
import { Counters } from './components/First_Counter/first_Counter';



function App() {

    const [value, setValue]=useState(0)
    const [toggle, setToggle]=useState(false)

    return (
        <div className={a.wrapper}>
          <Counters
                value={value}
                setValue={setValue}
                setToggle={setToggle}
                toggle={toggle}
          />
        </div>
    );
}

export default App;
