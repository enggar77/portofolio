'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { language } from '@/data/data';

type Lang = 'en' | 'id';

interface LangContextProps {
	data: any;
	toggleLang: () => void;
	lang: Lang;
}

const LangContext = createContext<LangContextProps | undefined>(undefined);

export function useLang() {
	const context = useContext(LangContext);
	if (!context) {
		throw new Error('useLang must be used within a LangProvider');
	}
	return context;
}

export function LangProvider({ children }: { children: React.ReactNode }) {
	const [lang, setLang] = useState<Lang>(
		(localStorage.getItem('lang') as Lang) || 'en'
	);

	useEffect(() => {
		localStorage.setItem('lang', lang);
	}, [lang]);

	const toggleLang = () => {
		setLang((prevLang) => {
			const nextLang = prevLang === 'en' ? 'id' : 'en';
			return nextLang;
		});
	};

	const value = { data: language[lang], toggleLang, lang };

	return (
		<LangContext.Provider value={value}>{children}</LangContext.Provider>
	);
}
