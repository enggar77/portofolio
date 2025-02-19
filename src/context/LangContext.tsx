'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { language } from '@/data/data';

type Lang = 'en' | 'id';

interface LangContextProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
	// Initial state is null to wait for localStorage check
	const [lang, setLang] = useState<Lang | null>(null);

	useEffect(() => {
		// Check localStorage only on client side
		const stored = localStorage.getItem('lang') as Lang | null;
		setLang(stored || 'en');
	}, []);

	useEffect(() => {
		if (lang) localStorage.setItem('lang', lang);
	}, [lang]);

	const toggleLang = () => {
		setLang((prevLang) => (prevLang === 'en' ? 'id' : 'en'));
	};

	// Do not render children until lang is defined to avoid text shift
	if (lang === null) return null;

	const value = { data: language[lang], toggleLang, lang };

	return (
		<LangContext.Provider value={value}>{children}</LangContext.Provider>
	);
}
