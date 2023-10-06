import {apiUrl} from "../constants/apiConstants";
import {IQuizDataItem} from "../types/api";

export let quizDataList: IQuizDataItem[] | [] = [];



export const fetchData = async () => {
	try {
		const response = await fetch(apiUrl);

		if (!response.ok) {
			throw new Error(`Error occurred with status ${response.status}`)
		}

		const res = await response.json();

		quizDataList = res.results;
		addCorrectAnswersToOptions();
	}catch (e) {
		console.error('Error occurred', e)
	}
};

// in this method I add correct answer to list of non-corrects, because api gave us correct answer separately,
// and for comfortable mapping we added correct answers to non-corrects list
const addCorrectAnswersToOptions = () => {
	quizDataList.map((quiz, i) => {
		const correctAnswer = quiz.correct_answer;
		const incorrectAnswers = quiz.incorrect_answers;
		incorrectAnswers.splice(
			Math.floor(Math.random() * (incorrectAnswers.length + 1)),
			0,
			correctAnswer,
		);
		quizDataList[i].incorrect_answers = incorrectAnswers;
	});
};