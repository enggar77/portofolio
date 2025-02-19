import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

function Clock({ timezone, city }: { timezone: string; city: string }) {
	const [time, setTime] = useState(moment().tz(timezone).format('HH:mm:ss'));

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(moment().tz(timezone).format('HH:mm:ss a'));
		}, 1000);

		return () => clearInterval(intervalId);
	}, [timezone]);

	return (
		<div>
			{city} {time}
		</div>
	);
}

export default Clock;
