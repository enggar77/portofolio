'use client';

import { useLang } from '@/context/LangContext';
import { useEffect, useState } from 'react';

export default function ThemeSwitch() {
	const [theme, setTheme] = useState('');
	const { data } = useLang();

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
		<span
			onClick={toggleTheme}
			className="font-semibold underline cursor-pointer"
		>
			{theme === 'black' ? data.theme.dark : data.theme.light}
		</span>
	);
}
