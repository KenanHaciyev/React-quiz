import React from 'react';
import styles from "./ResultsListItem.module.css";

interface IResultsListItemPropsTypes {
    questionData: {
        selectedOption: string,
        question: string,
        correctAnswer: string
    }
}

const ResultsListItem : React.FC<IResultsListItemPropsTypes>= ({questionData}) => {
    const selectedValue = questionData?.selectedOption
    return (
        <>
            <h3>{questionData?.question}</h3>
            {selectedValue ? (
                <div
                    className={
                        questionData.correctAnswer === selectedValue ? styles.isCorrect : styles.isWrong
                    }
                >
                    <span className={styles.bold}>You answered:</span> {selectedValue}
                </div>
            ) : (
                <div className={styles.isWrong}>You didn't answer</div>
            )}
            <div className={styles.isCorrect}>
                <span className={styles.bold}>Correct answer is:</span> {questionData?.correctAnswer}
            </div>
        </>
    );
};

export default ResultsListItem;
