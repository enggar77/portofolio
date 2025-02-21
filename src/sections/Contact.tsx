import { about } from '@/data/data';
import Link from 'next/link';

export default function Contact() {
	return (
		<div className="sticky top-0 bg-base-200">
			<div className="md:max-w-[700px] lg:max-w-[850px] mx-auto pt-32 px-[15px] flex flex-col justify-between min-h-screen">
				<div>
					<div className="text-[42px] md:text-[60px] lg:text-[72px]">
						<h1>Let&apos;s make something</h1>
						<h1>
							<span className="underline">great</span> together.
						</h1>
					</div>

					<a
						href="mailto:jihandokoenggar@gmail.com"
						className="underline text-[18px] md:text-[32px]  mt-14 block"
					>
						jihandokoenggar@gmail.com
					</a>
				</div>

				<div className="space-y-10 pb-3">
					<div className="flex flex-wrap gap-4 underline">
						<Link href={about.links.github} target="_blank">
							Github
						</Link>
						<Link href={about.links.linkedin} target="_blank">
							LinkendIn
						</Link>
						<Link href={about.links.ig} target="_blank">
							Instagram
						</Link>
					</div>
					<div className="text-sm text-center">
						© 2025 Created with&nbsp; 💙
					</div>
				</div>
			</div>
		</div>
	);
}
