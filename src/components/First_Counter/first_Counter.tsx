import React from 'react';
import f from "./first.Counter.module.css";
import {UniversalValue} from "../iniversalValue/universalValue";
import {UniversalButton} from "../universalButton/universalButton";

type ValuePropsType = {
    value: number
}

export const FirstCounter = (props:ValuePropsType) => {
    return (
        <div className={f.counter_wrapper}>
            <div className={f.value}>
                <UniversalValue value={props.value}/>
            </div>
            <div className={f.button_wrapper}>
                <div className={f.inc}>
                    <UniversalButton name={'inc'} callBack={()=>{}}/>
                </div>
                <div className={f.dec}>
                    <UniversalButton name={'dec'} callBack={()=>{}}/>
                </div>
               <div className={f.save}>
                   <UniversalButton name={'save'} callBack={()=>{}}/>
               </div>
            </div>
        </div>
    );
};
