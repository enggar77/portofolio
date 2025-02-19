'use client';

import ExternalLink from '@/components/ExternalLink';
import { useLang } from '@/context/LangContext';
import { projects } from '@/data/data';
import ViewIcon from '@/data/ViewIcon';
import { useRef } from 'react';
import { Badge, Button } from 'react-daisyui';
import Screenshots from './Screenshots';
import ShowModal from '@/components/ShowModal';

function ProjectItem({ project }: { project: (typeof projects)[number] }) {
	const { data } = useLang();
	const modalRef = useRef<HTMLDialogElement>(null);
	const handleShow = () => {
		modalRef.current?.showModal();
	};

	return (
		<div key={project.id} className="sticky top-0 min-h-screen bg-base-200">
			{/* HEADER */}
			<div
				className={
					project.id === '01'
						? 'bg-error'
						: project.id === '02'
						? 'bg-info'
						: project.id === '03'
						? 'bg-success'
						: ''
				}
			>
				<div className="max-w-[700px] mx-auto pt-20 pb-10 md:pt-24 md:pb-24 px-[15px]">
					<div className="flex items-baseline gap-1 border-b-2 w-fit border-base-content relative top-3 ml-auto">
						<span className="text-[24px]">{project.id}</span>
						<p className="text-xs uppercase">project</p>
					</div>
					<h1 className="text-[60px] md:text-[100px] uppercase font-medium">
						{project.name}
					</h1>
				</div>
			</div>

			<div className="max-w-[700px] mx-auto py-6 px-[15px]">
				{/* BADGE */}
				<div className="flex-wrap text-sm flex gap-2">
					{project.techs.map((tech) => (
						<Badge key={tech} color="accent">
							{tech}
						</Badge>
					))}
				</div>
				{/* DETAILS */}
				<p className="mt-5">{data.project.description[project.id]}</p>
				<div className="flex flex-col md:flex-row md:justify-between mt-5 md:mt-20 gap-5">
					{/* SCREENSHOTS */}
					<Button
						color="primary"
						className="uppercase w-fit md:self-end"
						endIcon={<ViewIcon width={24} fill="currentColor" />}
						onClick={handleShow}
					>
						screenshots
					</Button>
					<ShowModal
						content={() => <Screenshots images={project.image} />}
						ref={modalRef}
					/>
					{/* LINKS */}
					<div className="space-y-4">
						<ExternalLink link={project.github}>
							{data.project.link['01']}
						</ExternalLink>
						{project.website && (
							<ExternalLink link={project.website}>
								{data.project.link['02']}
							</ExternalLink>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default function Projects() {
	return (
		<>
			{projects.map((project) => (
				<ProjectItem project={project} key={project.id} />
			))}
		</>
	);
}
