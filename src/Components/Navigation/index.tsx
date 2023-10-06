import React from 'react';
import styles from './navigation.module.css';
import ButtonComponent from '../Button';

interface INavigation {
	handlePrevious: () => void;
	handleNext: () => void;
	step: number;
}

const Navigation: React.FC<INavigation> = ({ handlePrevious, handleNext, step }) => {
	return (
		<div className={styles.navigation}>
			{!!step && <ButtonComponent onClick={handlePrevious} text={'Previous'} />}
			<h2>{step + 1} of 5 answers</h2>
			<ButtonComponent onClick={handleNext} text={'Next'} />
		</div>
	);
};

export default Navigation;
