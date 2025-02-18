import React from 'react';
import ForwardIcon from '@/data/forwardIcon';
import NextLink from 'next/link';

type Props = {
	children: React.ReactNode;
	link: string;
};

export default function ExternalLink({ children, link }: Props) {
	return (
		<div className="w-fit group">
			<div className="flex items-center gap-2 text-sm">
				<NextLink
					href={link}
					target="_blank"
					className="group-hover:text-base-content/50 transition-colors"
				>
					{children}
				</NextLink>
				<ForwardIcon
					width={11}
					className="fill-current transition-all group-hover:opacity-50"
				/>
			</div>
			<div className="h-[1px] bg-base-content group-hover:bg-base-content/50 transition-colors" />
		</div>
	);
}
