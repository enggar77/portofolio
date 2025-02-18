import { Carousel } from 'react-daisyui';

type Props = {
	images?: string[];
};
export default function Screenshots({ images }: Props) {
	return (
		<>
			{images ? (
				<Carousel width="full" vertical>
					{images.map((image) => (
						<Carousel.Item key={image} src={image} />
					))}
				</Carousel>
			) : (
				<h1>No Images Yet.</h1>
			)}
		</>
	);
}
