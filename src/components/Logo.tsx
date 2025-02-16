import Link from 'next/link';

export default function Logo() {
	return (
		<Link href="/">
			<div className="flex items-baseline gap-1">
				<h1 className="text-[26px] tracking-tight">enggar</h1>
				<p className="text-[10px]">developer</p>
			</div>
		</Link>
	);
}
