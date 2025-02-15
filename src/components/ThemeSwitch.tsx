'use client';

import { useEffect, useState } from 'react';
import { Button } from 'react-daisyui';

export default function ThemeSwitch() {
	const [theme, setTheme] = useState('');

	const toggleTheme = () => {
		setTheme((prevTheme) => {
			const nextTheme = prevTheme === 'lofi' ? 'black' : 'lofi';
			document.documentElement.setAttribute('data-theme', nextTheme);
			return nextTheme;
		});
	};

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') || 'lofi';
		setTheme(savedTheme);
		document.documentElement.setAttribute('data-theme', savedTheme);
	}, []);

	useEffect(() => {
		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<Button onClick={toggleTheme}>
			{theme === 'black' ? '[ dark ]' : 'dark'}
		</Button>
	);
}
