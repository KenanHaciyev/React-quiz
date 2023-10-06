import React from 'react';
import styles from './navigation.module.css';
import ButtonComponent from '../Button';

interface INavigationPropsTypes {
	handlePrevious: () => void;
	handleNext: () => void;
	step: number;
}

const Navigation: React.FC<INavigationPropsTypes> = ({ handlePrevious, handleNext, step }) => {
	return (
		<div className={styles.navigation}>
			{!!step && <ButtonComponent onClick={handlePrevious} text={'Previous'} />}
			<p>{step + 1} of 5 answers</p>
			<ButtonComponent onClick={handleNext} text={'Next'} />
		</div>
	);
};

export default Navigation;
