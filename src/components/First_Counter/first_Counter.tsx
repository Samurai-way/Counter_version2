import React, {useState} from 'react';
import f from "./first.Counter.module.css";
import {UniversalValue} from "../iniversalValue/universalValue";
import {UniversalButton} from "../universalButton/universalButton";
import {SecondCounter} from "../Second_Counter/second_Counter";

type ValuePropsType = {
    value: number
    setValue: (value: number) => void
    toggle: boolean
    setToggle: (toggle: boolean) => void
}

const none = {
    display: 'none'
}
const block = {
    display: 'block'
}

export const Counters = (props: ValuePropsType) => {

    // const [right, setRight] = useState(false)

    const incButtonHandler = () => {
        props.setValue(props.value + 1)
    }
    const decButtonHandler = () => {
        props.setValue(0)
    }
    const setButtonHandler = () => {
        props.setToggle(!props.toggle)
    }


    return (
        <div>
            <div style={props.toggle ? none : undefined} className={f.counter_wrapper}>
                <div className={f.value}>
                    <UniversalValue value={props.value}/>
                </div>
                <div className={f.button_wrapper}>
                    <div className={f.inc}>
                        <UniversalButton name={'inc'} callBack={incButtonHandler}/>
                    </div>
                    <div className={f.dec}>
                        <UniversalButton name={'dec'} callBack={decButtonHandler}/>
                    </div>
                    <div className={f.set}>
                        <UniversalButton name={'set'} callBack={setButtonHandler}/>
                    </div>
                </div>
            </div>
            <div style={!props.toggle ? block : undefined}>
                <SecondCounter toggle={props.toggle}
                               setToggle={props.setToggle}
                />
            </div>
        </div>

    );
};
