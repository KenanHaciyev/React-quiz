import React, { useEffect, useState } from 'react';
import styles from './timer.module.css';

interface ITimerPropsTypes {
	toResultOnTimeEnd: () => void;
}

const Timer: React.FC<ITimerPropsTypes> = ({ toResultOnTimeEnd }) => {
	const [timer, setTimer] = useState(30);

	useEffect(() => {
		const timerStart = setTimeout(() => {
			setTimer(prevState => prevState - 1);

			if (timer === 0) {
				toResultOnTimeEnd();
			}
		}, 1000);

		return () => clearInterval(timerStart);
	}, [timer]);

	return (
		<div className={styles.items}>
			<h2>Awesome Quiz Application</h2>
			<div className={styles.timer}>
				Time Left <span className={styles.timeLeft}>{timer}</span>
			</div>
		</div>
	);
};

export default Timer;
