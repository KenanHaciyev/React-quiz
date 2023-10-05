import React, { MouseEventHandler} from 'react';
import {Button} from "antd";

interface IButtonProps {
    text: string,
    onClick: MouseEventHandler<HTMLElement>
}

const ButtonComponent: React.FC<IButtonProps> = ({text, onClick}) => {
    return (
        <div>
            <Button onClick={onClick} type="primary">{text}</Button>
        </div>
    );
};

export default ButtonComponent;
