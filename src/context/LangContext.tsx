'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { language } from '@/data/data';

type Lang = 'en' | 'id';
type LangContextProps = {
	data: unknown;
	toggleLang: (lang: Lang) => void;
};

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

	const toggleLang = (newLang: Lang) => {
		setLang(newLang);
	};

	const value = { data: language[lang], toggleLang };

	return (
		<LangContext.Provider value={value}>{children}</LangContext.Provider>
	);
}
