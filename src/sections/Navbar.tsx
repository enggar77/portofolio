'use client';

import { useLang } from '@/context/LangContext';
import { Button } from 'react-daisyui';

export default function Navbar() {
	const { toggleLang, data } = useLang();
	return (
		<div>
			<h1>Logo</h1>
			<Button onClick={() => toggleLang('id')}>ID</Button>
			<Button onClick={() => toggleLang('en')}>EN</Button>

			<div className="flex gap-2">
				<span>{data.navigation.about}</span>
				<span>{data.navigation.contact}</span>
			</div>
		</div>
	);
}
