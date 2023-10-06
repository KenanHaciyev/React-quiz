import React from 'react';
import { ConfigProvider, Radio, RadioChangeEvent, Space } from 'antd';

import styles from './answerOptions.module.css';

import RadioButton from '../RadioButton';

interface IOptions {
	options: string[];
	step: number;
}
const AnswerOptions: React.FC<IOptions> = ({ options, step }) => {
	const handleSelectedOption = (e: RadioChangeEvent) => {
		let currentStepData = JSON.parse(localStorage.getItem(`step${step}`)!);
		const newSelectedOption = { selectedOption: e.target.value };
		const updatedStepData = {
			...currentStepData,
			...newSelectedOption,
		};
		localStorage.setItem(`step${step}`, JSON.stringify(updatedStepData));
	};

	return (
		<div className={styles.wrapper}>
			<ConfigProvider
				theme={{
					components: {
						Radio: {
							borderRadius: 6,
							controlHeight: 40,
							lineWidth: 2,
							colorBgContainer: 'rgb(251 253 240 / 24%);)',
						},
					},
				}}
			>
				<Radio.Group buttonStyle="solid">
					<Space direction="vertical">
						{options?.map((option, i) => {
							return (
								<RadioButton key={i} option={option} handleSelectedOption={handleSelectedOption} />
							);
						})}
					</Space>
				</Radio.Group>
			</ConfigProvider>
		</div>
	);
};

export default AnswerOptions;
