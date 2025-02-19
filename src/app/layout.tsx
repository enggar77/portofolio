import type { Metadata } from 'next';
import './globals.css';
import { LangProvider } from '@/context/LangContext';
import Navbar from '@/sections/Navbar';

export const metadata: Metadata = {
	title: 'Enggar J.',
	description:
		'Enggar Jihandoko is a passionate web developer specializing in modern front-end technologies like React.js and Next.js. Explore a portfolio showcasing dynamic, responsive projects built with cutting-edge frameworks, robust state management, and seamless backend integrations.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`antialiased font-normal text-base-content bg-base-200 lg:text-[18px]`}
		>
			<LangProvider>
				<body>
					<Navbar />
					{children}
				</body>
			</LangProvider>
		</html>
	);
}
