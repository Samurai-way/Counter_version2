import React, {useState} from 'react';
import f from "./first.Counter.module.css";
import {UniversalValue} from "./iniversalValue/universalValue";
import {UniversalButton} from "./universalButton/universalButton";
import {SecondCounter} from "../Second_Counter/second_Counter";

type ValuePropsType = {
    value: number
    setValue: (value: number) => void
}

const none = {
    display: 'none'
}
const block = {
    display: 'block'
}

export const FirstCounter = (props: ValuePropsType) => {

    const [right, setRight] = useState(false)

    const incButtonHandler = () => {
        props.setValue(props.value + 1)
    }
    const decButtonHandler = () => {
        props.setValue(0)
    }

    const setButtonHandler = () => {
        setRight(!right)
    }

    return (
        <div>
            <div style={right ? none : undefined} className={f.counter_wrapper}>
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
            <div style={!right ? none : undefined}>
                <SecondCounter/>
            </div>
        </div>

    );
};
