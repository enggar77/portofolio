'use client';

import Clock from '@/components/Clock';
import ScrollIndicator from '@/components/ScrollIndicator';
import Wrapper from '@/components/Wrapper';
import { useLang } from '@/context/LangContext';
import { about } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from 'react-daisyui';

export default function About() {
	const { data, lang } = useLang();

	return (
		<div className="min-h-screen sticky top-0 flex flex-col">
			<div className="md:max-w-[700px] lg:max-w-[850px] mx-auto pt-32 pb-10 px-[15px]">
				<div className="group mb-10">
					<h1 className="hidden md:block text-[40px] md:text-[60px] lowercase font-semibold transition-all duration-300 relative w-fit ">
						{about.name}
						<div className="hidden absolute h-[80px] w-[80px] rounded-full overflow-hidden border-2 border-base-content transition-all duration-300 opacity-0 group-hover:opacity-100 lg:block lg:top-2 lg:-right-[100px]">
							<Image
								src={about.picture}
								alt={about.name}
								fill
								className="object-cover"
								style={{ scale: 2.5 }}
							/>
						</div>
					</h1>
					<h1 className="md:hidden text-[40px] font-semibold">
						enggar j.
					</h1>
					<p
						className="md:text-lg my-5"
						dangerouslySetInnerHTML={{ __html: data.about }}
					/>
					{/* <Link
						href="#"
						target="_blank"
						className="underline font-semibold inline-block text-blue-500 hover:text-blue-600"
					>
						Resume
					</Link> */}
				</div>

				<div className="space-y-5">
					<h2 className="font-semibold">
						{lang === 'en'
							? 'Technology that i use :'
							: 'Teknologi yang saya gunakan :'}
					</h2>
					<div className="flex flex-wrap gap-2 lg:pr-24">
						{about.techs.map((tech) => (
							<Badge
								key={tech}
								color="primary"
								size="sm"
								className="md:p-3 md:text-[14px]"
							>
								{tech}
							</Badge>
						))}
					</div>
				</div>
			</div>

			<div className="mt-auto pb-5">
				<Wrapper>
					<div className="flex justify-end">
						<div className="text-xs md:text-sm flex flex-col items-end gap-2 md:gap-5">
							<Clock
								timezone="Asia/Jakarta"
								city={`${
									lang === 'en'
										? 'Central Java'
										: 'Jawa Tengah'
								} - Indonesia`}
							/>
							<ScrollIndicator>
								{lang === 'en'
									? 'Scroll Down'
									: 'Scroll Ke bawah'}
							</ScrollIndicator>
						</div>
					</div>
				</Wrapper>
			</div>
		</div>
	);
}
