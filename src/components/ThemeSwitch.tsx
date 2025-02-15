'use client';

import { useEffect, useState } from 'react';
import { Button } from 'react-daisyui';

export default function ThemeSwitch() {
	const [theme, setTheme] = useState('light');

	// Load theme from local storage on initial render
	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') || 'light';
		setTheme(savedTheme);
	}, []);

	// Save theme to local storage whenever it changes
	useEffect(() => {
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
		document.documentElement.setAttribute('data-theme', theme);
	};
	return (
		<Button onClick={toggleTheme}>
			{theme === 'light' ? 'Dark' : 'Light'}
		</Button>
	);
}
