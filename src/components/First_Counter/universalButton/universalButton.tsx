import React from 'react';
import {Button} from "@mui/material";

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
            <Button color={'error'}
                    variant={'contained'}
                    onClick={onCLickHandler}>{props.name}</Button>
        </div>
    );
};
