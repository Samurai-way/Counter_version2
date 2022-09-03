import React from 'react';

type UniversalButtonProps = {
    name: string
    callBack: () => void
}

export const UniversalButton = (props: UniversalButtonProps) => {

    const onCLickHandler = () => {
        props.callBack()
    }

    return (
        <div>
            <button onClick={onCLickHandler}>{props.name}</button>
        </div>
    );
};
