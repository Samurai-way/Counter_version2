import React, {ChangeEvent, useState} from 'react';
import s from './second_Counter.module.css';
import {UniversalButton} from "../universalButton/universalButton";
import {TextField} from "@mui/material";

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

    const onChangeHandlerInput =(e: ChangeEvent<HTMLInputElement>)=>{
        console.log(e.currentTarget.value)
    }

    return (
        <div style={none ? display : undefined} className={s.wrapper}>
            <div className={s.inputs_wrapper}>
                <div className={s.max_input}>Max value:
                    <TextField
                        style={{width: '150px', marginLeft: '20px'}}
                        onChange={onChangeHandlerInput}
                        type="number"
                        variant="standard"
                    />
                </div>
                <div className={s.start_input}>Start value:
                    <TextField
                               type="number"
                               variant="standard"
                               style={{width: '150px', marginLeft: '20px'}}
                    />
                </div>
            </div>
            <div className={s.button_wrapper}>
                <div className={s.set_button}>
                    <UniversalButton name={'set'} callBack={setToggle}/>
                </div>
            </div>
        </div>
    );
};
