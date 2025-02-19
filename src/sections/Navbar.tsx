'use client';

import Logo from '@/components/Logo';
import ThemeSwitch from '@/components/ThemeSwitch';
import Wrapper from '@/components/Wrapper';
import { useLang } from '@/context/LangContext';
import { useState } from 'react';

export default function Navbar() {
	const { lang, toggleLang } = useLang();
	const [dropdown, setDropdown] = useState(false);
	return (
		<div className="fixed top-0 left-0 w-full z-10 bg-base-200">
			<Wrapper>
				<div className="flex justify-between items-center py-4 lg:relative">
					<Logo />
					<div
						className="space-y-2 p-4 cursor-pointer"
						onClick={() => setDropdown((prev) => !prev)}
					>
						<div className="w-[30px] bg-base-content h-[1.5px]" />
						<div className="w-[30px] bg-base-content h-[1.5px]" />
					</div>

					<div
						className={
							dropdown
								? 'absolute right-0 top-[100%] text-sm flex flex-col items-end gap-2 bg-base-200 w-full pr-6 pb-3 md:pr-8 lg:bg-transparent lg:pr-4 lg:pt-2'
								: 'hidden'
						}
					>
						<p>
							{lang === 'en' ? 'Theme : ' : 'Tema : '}
							<ThemeSwitch />
						</p>
						<div className="flex gap-1">
							<span>
								{lang === 'en' ? 'Language :' : 'Bahasa :'}
							</span>
							<span
								onClick={() => toggleLang()}
								className="underline font-semibold cursor-pointer"
							>
								{lang === 'en' ? 'English' : 'Indonesia'}
							</span>
						</div>
					</div>
				</div>
			</Wrapper>
		</div>
	);
}
