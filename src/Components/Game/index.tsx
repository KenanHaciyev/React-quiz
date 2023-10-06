import React, { useEffect, useState } from 'react';
import Question from '../Question';
import AnswerOptions from '../AnswerOptions';
import { getData, IQuizData, quizData } from '../../services/getData';
import Result from '../Result';
import styles from './game.module.css';
import Navigation from '../Navigation';

const Game: React.FC = () => {
	const [step, setStep] = useState(0);
	const [questionItems, setQuestionItems] = useState<IQuizData[]>([]);
	const currentQuestion = questionItems[step];

	if (step < 5) {
		const obj = {
			question: currentQuestion?.question,
			correctAnswer: currentQuestion?.correct_answer,
		};

		localStorage.setItem(`step${step}`, JSON.stringify(obj));
		// localStorage.setItem(`correctAnswers${step}`, currentQuestion?.correct_answer);
	}

	// Function to fetch and set a random set of quiz questions.
	const getRandomQuestions = () => {
		const randomNum = Math.floor(Math.random() * 24 + 1);
		const randomQuizItems = quizData.slice(randomNum, randomNum + 5);
		setQuestionItems(randomQuizItems);
	};

	useEffect(() => {
		localStorage.clear();
		getData().then(() => getRandomQuestions());
	}, []);

	const resetStep = () => {
		setStep(0);
		localStorage.clear();
		getRandomQuestions();
	};

	const handleNext = () => setStep(step + 1);

	const handlePrevious = () => setStep(step - 1);

	return (
		<>
			{step < 5 ? (
				quizData.length ? (
					<div className={styles.wrapper}>
						<span className={styles.timeStep}></span>
						<Question question={currentQuestion?.question} />
						<AnswerOptions options={currentQuestion?.incorrect_answers} step={step} />
						<Navigation handlePrevious={handlePrevious} handleNext={handleNext} step={step} />
					</div>
				) : (
					<h2>Loading...</h2>
				)
			) : (
				// Display the quiz result when all questions are answered
				<Result resetStep={resetStep} />
			)}
		</>
	);
};

export default Game;
