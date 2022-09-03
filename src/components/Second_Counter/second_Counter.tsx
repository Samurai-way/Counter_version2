import React, {useState} from 'react';
import s from './second_Counter.module.css';
import {UniversalButton} from "../universalButton/universalButton";

const display = {
    display: 'none'
}

type SecondCounterPropsType = {
    toggle: boolean
    setToggle: (toggle: boolean) => void
}

export const SecondCounter = (props: SecondCounterPropsType) => {

    const [none, setNone] = useState(false)

    const setToggle = () => {
        setNone(!props.toggle)
        props.setToggle(false)
    }

    return (
        <div style={none ? display : undefined} className={s.wrapper}>
            <div className={s.inputs_wrapper}>
                <div className={s.max_input}>Max value: <input type={'number'}/></div>
                <div className={s.start_input}>Start value: <input type={'number'}/></div>
            </div>
            <div className={s.button_wrapper}>
                <div className={s.set_button}>
                    <UniversalButton name={'set'} callBack={setToggle}/>
                </div>
            </div>
        </div>
    );
};
