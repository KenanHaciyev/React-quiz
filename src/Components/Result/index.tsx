import React, { useState } from 'react';
import { Typography } from 'antd';

import ResultsListItem from '../ResultsListItem';
import ButtonComponent from '../Button';

import styles from './result.module.css';

interface IResultPropsTypes {
	resetStep: () => void;
	timeLineEnd: boolean;
}

const Result: React.FC<IResultPropsTypes> = ({ resetStep, timeLineEnd }) => {
	const [isResultsListVisible, setIsResultsListVisible] = useState(false);
	const [correctsCount, setCorrectsCount] = useState(0);
	const fakeArray = new Array(5).fill(null);
	const { Title } = Typography;

	const getLocalStorageData = (i: number) => {
		return JSON.parse(localStorage.getItem(`step${i}`)!);
	};

	const countCorrectAnswers = () => {
		fakeArray.map((_, i) => {
			const question = getLocalStorageData(i);
			if (question && question?.correctAnswer === question?.selectedOption) {
				setCorrectsCount(prevState => prevState + 1);
			}
		});
	};
	const handleAnswersCounting = () => {
		countCorrectAnswers();
		setIsResultsListVisible(true);
	};

	return (
		<div className={styles.wrapper}>
			{isResultsListVisible ? (
				<>
					<Title level={4}>You answered correctly to {correctsCount} questions</Title>
					{fakeArray.map((_, i) => {
						const question = getLocalStorageData(i);
						return <ResultsListItem key={i} questionData={question} />;
					})}
					<ButtonComponent onClick={resetStep} text="Play again" />
				</>
			) : (
				<>
					{timeLineEnd && <h2>Time over</h2>}
					<ButtonComponent text="Get results" onClick={handleAnswersCounting} />
				</>
			)}
		</div>
	);
};

export default Result;
