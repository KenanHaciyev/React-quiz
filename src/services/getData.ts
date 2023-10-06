export let quizData: IQuizData[] | [] = [];
const apiUrl: string = 'https://opentdb.com/api.php?amount=30&category=18&difficulty=easy&type=multiple';

export interface IQuizData {
	category: string;
	correct_answer: string;
	difficulty: string;
	incorrect_answers: string[];
	question: string;
	type: string;
}

export const getData = async () => {
	const data = await fetch(apiUrl);
	const response = await data.json();
	quizData = response.results;
	generateOptions();
};

// in this method I add correct answer to list of non-corrects, because api gave us correct answer separately,
// and for comfortable mapping we added correct answers to non-corrects list
const generateOptions = () => {
	quizData.map((quiz, i) => {
		const correctAnswer = quiz.correct_answer;
		const incorrectAnswers = quiz.incorrect_answers;
		incorrectAnswers.splice(
			Math.floor(Math.random() * (incorrectAnswers.length + 1)),
			0,
			correctAnswer,
		);
		quizData[i].incorrect_answers = incorrectAnswers;
	});
};