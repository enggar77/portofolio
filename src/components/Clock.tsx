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
			<span className="font-medium">
				{city} {time}
			</span>
		</div>
	);
}

export default Clock;
