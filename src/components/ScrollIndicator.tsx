export default function ScrollIndicator({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex gap-1">
			<span className="text-xs">{children}</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="12"
				viewBox="0 0 16 16"
				fill="currentColor"
			>
				<path
					d="M8.66667 2.66667C8.66667 2.29848 8.36819 2 8 2C7.63181 2 7.33333 2.29848 7.33333 2.66667V12.0572L4.13807 8.86193C3.87772 8.60158 3.45561 8.60158 3.19526 8.86193C2.93491 9.12228 2.93491 9.54439 3.19526 9.80474L7.05719 13.6667C7.57789 14.1874 8.42211 14.1874 8.94281 13.6667L12.8047 9.80474C13.0651 9.54439 13.0651 9.12228 12.8047 8.86193C12.5444 8.60158 12.1223 8.60158 11.8619 8.86193L8.66667 12.0572V2.66667Z"
					fill="currentColor"
				></path>
			</svg>
		</div>
	);
}
