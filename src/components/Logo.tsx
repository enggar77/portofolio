'use client';

export default function Logo() {
	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	return (
		<div onClick={handleClick} className="cursor-pointer">
			<div className="flex items-baseline gap-1">
				<h1 className="text-[26px] tracking-tight">enggar</h1>
				<p className="text-[10px]">developer</p>
			</div>
		</div>
	);
}
