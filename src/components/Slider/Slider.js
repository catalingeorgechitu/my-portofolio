import React from 'react';
import IphoneSlides from './IphoneSlides';
import MacBookSlides from './MacBookSlides';

export default function Slider() {
	return (
		<section
			id='slider'
			className='min-h-[600px] my-10 md:my-0 lg:h-screen snap-start max-w-7xl mx-auto'
		>
			<div className='w-full h-full mx-auto flex justify-center lg:pt-20'>
				<MacBookSlides />
				<IphoneSlides />
			</div>
		</section>
	);
}
