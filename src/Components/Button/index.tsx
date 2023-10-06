import React, { MouseEventHandler } from 'react';
import { Button } from 'antd';

interface IButtonPropsTypes {
	text: string;
	onClick: MouseEventHandler<HTMLElement>;
}

const ButtonComponent: React.FC<IButtonPropsTypes> = ({ text, onClick }) => {
	return (
		<>
			<Button onClick={onClick} type="primary">
				{text}
			</Button>
		</>
	);
};

export default ButtonComponent;
