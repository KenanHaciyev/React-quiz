import React, { useState } from 'react';
import Question from '../Question';
import AnswerOptions from '../AnswerOptions';
import { quizQuestions } from '../../questions';
import ButtonComponent from "../Button";
import {Typography} from "antd";

const Game: React.FC = () => {
	const [step, setStep] = useState(0);
	const [correctAnswers, setCorrectAnswers] = useState(0);
	const question = quizQuestions[step];


	console.log(correctAnswers);
	return (
		<div>
			{
				<div key={question.id} style={{ display: 'flex', flexDirection: 'column' }}>
					<Question question={question.question} />
					<AnswerOptions
						options={question.options}
						correctAnswer={question.correctAnswer}
						setCorrectAnswers={setCorrectAnswers}
					/>
					<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} >
						{
							!!step && <ButtonComponent onClick={() => setStep(step-1)} text={'Previous'}/>
						}
						<h2>{step + 1} of {quizQuestions.length} answers</h2>
						<ButtonComponent onClick={() => setStep(step+1)} text={'Next'}/>
					</div>
				</div>
			}
		</div>
	);
};

export default Game;
