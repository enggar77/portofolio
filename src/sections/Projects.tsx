'use client';

import ExternalLink from '@/components/ExternalLink';
import { useLang } from '@/context/LangContext';
import { projects } from '@/data/data';
import { Badge } from 'react-daisyui';

export default function Projects() {
	const { data } = useLang();

	return (
		<>
			{projects.map((project) => (
				<div
					key={project.id}
					className="sticky top-0 min-h-screen bg-base-200"
				>
					{/* HEADER */}
					<div
						className={
							project.id === '01'
								? 'bg-error'
								: project.id === '02'
								? 'bg-info'
								: ''
						}
					>
						<div className="max-w-[600px] mx-auto py-24 px-[15px]">
							<div className="flex items-baseline gap-1 border-b-2 w-fit border-base-content relative top-3 ml-auto">
								<span className="text-[24px]">
									{project.id}
								</span>
								<p className="text-xs uppercase">project</p>
							</div>
							<h1 className="text-[60px] md:text-[100px] uppercase font-medium">
								{project.name}
							</h1>
						</div>
					</div>

					<div className="max-w-[600px] mx-auto py-6 px-[15px]">
						{/* BADGE */}
						<div className="flex-wrap text-sm flex gap-2">
							{project.techs.map((tech) => (
								<Badge key={tech} color="accent">
									{tech}
								</Badge>
							))}
						</div>
						{/* DETAILS */}
						<p className="mb-10 mt-5">
							{data.project.description[project.id]}
						</p>
						{/* LINKS */}
						<ExternalLink link={project.github}>
							{data.project.link['01']}
						</ExternalLink>
						<ExternalLink link={project.website}>
							{data.project.link['02']}
						</ExternalLink>
					</div>
				</div>
			))}
		</>
	);
}
