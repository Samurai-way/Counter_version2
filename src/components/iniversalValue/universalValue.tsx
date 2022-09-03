import React from 'react';
import v from './universalValue.module.css'

type PropsUniversalValueType = {
    value: number
}

export const UniversalValue = (props: PropsUniversalValueType) => {
    return (
        <div className={v.value}>
            {props.value}
        </div>
    );
};
