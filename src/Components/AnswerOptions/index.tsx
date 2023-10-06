import React from 'react';
import { ConfigProvider, Radio, RadioChangeEvent, Space } from 'antd';

interface IOptions {
	options: string[];
	step: number;
}
const AnswerOptions: React.FC<IOptions> = ({ options, step }) => {
	const logger = (e: RadioChangeEvent) => {
		localStorage.setItem(`selectedOption${step}`, e.target.value);
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
						{options?.map((option, i) => {
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
