import React, { forwardRef, useState } from 'react';
import { Modal } from 'react-daisyui';

interface ContentProps {
	handleClose: () => void;
	setWide: React.Dispatch<React.SetStateAction<boolean>>;
	images?: string[];
}

interface ShowModalProps
	extends Omit<React.ComponentPropsWithoutRef<typeof Modal>, 'content'> {
	content: React.ComponentType<ContentProps>;
}

const ShowModal = forwardRef<HTMLDialogElement, ShowModalProps>(
	({ content: Content, ...props }, ref) => {
		const [wide, setWide] = useState(true);

		const handleClose = () => {
			if (ref && typeof ref !== 'function' && ref.current) {
				// Assume ref.current is an HTMLDialogElement with a close method
				(ref.current as HTMLDialogElement).close?.();
			}
		};

		return (
			<Modal
				ref={ref}
				backdrop
				onClose={handleClose}
				className={wide ? 'bg-base-300 w-11/12 max-w-5xl' : ''}
				{...props}
			>
				{/* Render Dynamic Content */}
				<Content
					handleClose={handleClose}
					setWide={setWide}
					{...props}
				/>
			</Modal>
		);
	}
);

ShowModal.displayName = 'ShowModal';

export default ShowModal;
