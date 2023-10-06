import React from 'react';

import {Radio, RadioChangeEvent} from "antd";

interface IRadioButtonPropsType{
    option: string,
    handleSelectedOption: (e: RadioChangeEvent) => void
}

const RadioButton : React.FC<IRadioButtonPropsType>= ({option, handleSelectedOption}) => {
    return (
        <Radio.Button
            onChange={e => handleSelectedOption(e)}
            style={{ minWidth: '500px', overflow: 'hidden'}}
            value={option}
        >
            {option}
        </Radio.Button>
    );
};

export default RadioButton;
