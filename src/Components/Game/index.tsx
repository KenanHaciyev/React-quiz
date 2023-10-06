import React, { useEffect, useState } from 'react';

import { fetchData, quizDataList } from '../../services/getData';
import AnswerOptions from '../AnswerOptions';
import Navigation from '../Navigation';
import Question from '../Question';
import Result from '../Result';
import Timer from '../Timer';

import styles from './game.module.css';
import { IQuizDataItem } from '../../types/api';

const Game: React.FC = () => {
	const [questionItems, setQuestionItems] = useState<IQuizDataItem[]>([]);
	const [timeLineEnd, setTimeLineEnd] = useState<boolean>(false);
	const [step, setStep] = useState<number>(0);
	const currentQuestion = questionItems[step];

	if (step < 5) {
		const questionData = {
			question: currentQuestion?.question,
			correctAnswer: currentQuestion?.correct_answer,
		};

		const isQuestionInStore = JSON.parse(localStorage.getItem(`step${step}`)!);

		if (!isQuestionInStore) {
			localStorage.setItem(`step${step}`, JSON.stringify(questionData));
		}
	}

	// Function to fetch and set a random set of quiz questions.
	const getRandomQuestions = () => {
		const randomNum = Math.floor(Math.random() * 24 + 1);
		const randomQuizItems = quizDataList.slice(randomNum, randomNum + 5);
		setQuestionItems(randomQuizItems);
	};

	useEffect(() => {
		localStorage.clear();
		fetchData().then(() => getRandomQuestions());
	}, []);

	const resetStep = () => {
		setStep(0);
		localStorage.clear();
		getRandomQuestions();
		setTimeLineEnd(false);
	};

	const toResultOnTimeEnd = () => {
		setStep(5);
		setTimeLineEnd(true);
	};

	const handleNext = () => setStep(step + 1);

	const handlePrevious = () => setStep(step - 1);

	if (!quizDataList.length) {
		return <h2>Loading...</h2>;
	}

	return (
		<>
			{step < 5 ? (
				<div className={styles.wrapper}>
					<Timer toResultOnTimeEnd={toResultOnTimeEnd} />
					<span className={styles.timeStep}></span>
					<Question question={currentQuestion?.question} />
					<AnswerOptions options={currentQuestion?.incorrect_answers} step={step} />
					<Navigation handlePrevious={handlePrevious} handleNext={handleNext} step={step} />
				</div>
			) : (
				// Display the quiz results when all questions are answered
				<Result timeLineEnd={timeLineEnd} resetStep={resetStep} />
			)}
		</>
	);
};

export default Game;
