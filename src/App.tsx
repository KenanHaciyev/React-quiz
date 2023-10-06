import React from 'react';
import './App.css';
import { Col, Row } from 'antd';
import Game from './Components/Game';

const App: React.FC = () => {
	return (
		<div>
			<Row justify="center" align="middle" style={{ height: '100vh' }}>
				<Col>
					<Game />
				</Col>
			</Row>
		</div>
	);
};

export default App;
