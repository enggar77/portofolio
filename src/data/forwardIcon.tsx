const ForwardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="4 4 16 16" {...props}>
		<g id="arrow-forward">
			<path
				className="fill-current"
				d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
			/>
		</g>
	</svg>
);

export default ForwardIcon;
