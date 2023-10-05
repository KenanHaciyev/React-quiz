import React from 'react';

interface IQuestionProps {
	question: string;
}

const Question: React.FC<IQuestionProps> = ({ question }) => <>{question}</>;

export default Question;
