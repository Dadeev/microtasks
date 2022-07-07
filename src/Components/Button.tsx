import React from 'react';

type ButtonType = {
    name: string
    callBack: () => void
}

export const Button = (props: ButtonType) => {
    const onClickButtonHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};
