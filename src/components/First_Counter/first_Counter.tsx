import React from 'react';
import f from "./first.Counter.module.css";
import {UniversalValue} from "../iniversalValue/universalValue";
import {UniversalButton} from "../universalButton/universalButton";

type ValuePropsType = {
    value: number
    setValue: (value: number) => void
}

export const FirstCounter = (props: ValuePropsType) => {

    const incButtonHandler = () => {
        props.setValue(props.value + 1)
    }

    const decButtonHandler = () => {
        props.setValue(0)
    }

    return (
        <div className={f.counter_wrapper}>
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
                    <UniversalButton name={'set'} callBack={() => {
                    }}/>
                </div>
            </div>
        </div>
    );
};
