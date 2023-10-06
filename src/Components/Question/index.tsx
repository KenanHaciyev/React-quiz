import React from 'react';

interface IQuestionProps {
	question: string;
}

const Question: React.FC<IQuestionProps> = ({ question }) => <div style={{width: '500px'}} >{question}</div>;

export default Question;
