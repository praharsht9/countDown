import React, { useEffect, useRef, useState } from 'react';
import './countdown.css';

const CountDown = ({ seconds }) => {
	const [countDown, setCountDown] = useState(seconds);
	const timerId = useRef();

	const formatTime = (time) => {
		let minutes = Math.floor(time / 60);
		let seconds = Math.floor(time - minutes * 60);
		if (minutes <= 9) minutes = '0' + minutes;
		if (seconds <= 9) seconds = '0' + seconds;

		let fontColor = 'white'; // Default font color
		if (time <= 5) {
			fontColor = '#c40000'; // Change font color to red
		}

		return (
			<span style={{ color: fontColor }}>
				{minutes}:{seconds}
			</span>
		);
	};

	useEffect(() => {
		timerId.current = setInterval(() => {
			setCountDown((prev) => prev - 1);
		}, 1000);
		return () => clearInterval(timerId.current);
	}, []);

	useEffect(() => {
		if (countDown <= 0) {
			clearInterval(timerId.current);
			alert('END');
		}
	});

	return (
		<div>
			<h1 className='timer'>{formatTime(countDown)}</h1>
		</div>
	);
};

export default CountDown;
