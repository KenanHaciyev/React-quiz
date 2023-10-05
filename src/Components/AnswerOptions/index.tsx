import React from 'react';
import { ConfigProvider, Radio, RadioChangeEvent, Space } from 'antd';

interface IOptions {
	options: string[];
	correctAnswer: string;
	setCorrectAnswers: React.Dispatch<React.SetStateAction<number>>;
}
const AnswerOptions: React.FC<IOptions> = ({ options, correctAnswer, setCorrectAnswers }) => {
	const logger = (e: RadioChangeEvent) => {
		const selectedValue = e.target.value;
		if (selectedValue === correctAnswer) {
			setCorrectAnswers(prev => prev + 1);
		}
	};

	return (
		<div>
			<ConfigProvider
				theme={{
					components: {
						Radio: {
							borderRadius: 14,
							controlOutline: '#fff',
						},
					},
				}}
			>
				<Radio.Group buttonStyle="outline" size="middle">
					<Space direction="vertical">
						{options.map((option, i) => {
							return (
								<Radio.Button
									key={i}
									onChange={e => logger(e)}
									style={{ minWidth: '500px' }}
									value={option}
								>
									{option}
								</Radio.Button>
							);
						})}
					</Space>
				</Radio.Group>
			</ConfigProvider>
		</div>
	);
};

export default AnswerOptions;
