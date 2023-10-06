import React, { useState } from 'react';
import ButtonComponent from '../Button';
import { Typography } from 'antd';
import styles from './result.module.css';

interface IResultProps {
	resetStep: () => void;
}

const Result: React.FC<IResultProps> = ({ resetStep }) => {
	const [isResultVisible, setIsResultVisible] = useState(false);
	const { Title } = Typography;
	const [correct, setCorrect] = useState(0);

	const countAnswers = () => {
		new Array(5).fill(null).map((_, i) => {
			const question = JSON.parse(localStorage.getItem(`step${i}`)!);
			const selectedValue = localStorage.getItem(`selectedOption${i}`);
			if (question.correctAnswer === selectedValue) {
				setCorrect(prevState => prevState + 1);
			}
		});
	};

	const correctAnswersCounter = () => {
		countAnswers();
		setIsResultVisible(true);
	};

	return (
		<div className={styles.wrapper}>
			{!isResultVisible ? (
				<ButtonComponent text="Get results" onClick={correctAnswersCounter} />
			) : (
				<>
					<Title level={4}>You answered correctly to {correct} questions</Title>
					{new Array(5).fill(null).map((_, i) => {
						const question = JSON.parse(localStorage.getItem(`step${i}`)!);
						const selectedValue = localStorage.getItem(`selectedOption${i}`);
						return (
							<div key={i}>
								<h3>{question?.question}</h3>
								{selectedValue ? (
									<div
										className={
											question.correctAnswer === selectedValue ? styles.isCorrect : styles.isWrong
										}
									>
										<span className={styles.bold}>You answered:</span> {selectedValue}
									</div>
								) : (
									<div className={styles.isWrong}>You didn't answer</div>
								)}
								<div className={styles.isCorrect}>
									<span className={styles.bold}>Correct answer is:</span> {question?.correctAnswer}
								</div>
							</div>
						);
					})}
					<ButtonComponent onClick={resetStep} text="Play again" />
				</>
			)}
		</div>
	);
};

export default Result;
