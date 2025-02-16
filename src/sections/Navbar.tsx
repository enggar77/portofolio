'use client';

import Logo from '@/components/Logo';
import ThemeSwitch from '@/components/ThemeSwitch';
import Wrapper from '@/components/Wrapper';
import { useLang } from '@/context/LangContext';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
	const { lang, data, toggleLang } = useLang();
	const [dropdown, setDropdown] = useState(false);
	return (
		<>
			<Wrapper>
				<div className="flex justify-between items-center py-4 sticky">
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
								? 'mr-4 absolute right-0 top-[100%]  text-sm flex flex-col items-end gap-2'
								: 'hidden'
						}
					>
						<Link href="#" className="hover:text-base-content/50">
							{data.navigation.about}
						</Link>
						<Link href="#" className="hover:text-base-content/50">
							{data.navigation.contact}
						</Link>

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
		</>
	);
}
