import React from 'react';
import styles from './question.module.css';

interface IQuestionPropsTypes {
	question: string;
}

const Question: React.FC<IQuestionPropsTypes> = ({ question }) => (
	<div className={styles.question}>{question}</div>
);

export default Question;
