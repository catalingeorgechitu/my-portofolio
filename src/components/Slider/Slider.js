import React from 'react';
import IphoneSlides from './IphoneSlides';
import MacBookSlides from './MacBookSlides';

export default function Slider() {
	return (
		<section
			id='slider'
			className='min-h-[800px] content-center my-10 md:my-0 xl:h-screen snap-start max-w-7xl mx-auto scale-50 xl:scale-75 2xl:scale-100'
		>
			<div className='w-full min-h-[800px] mx-auto flex justify-center lg:pt-20'>
				<MacBookSlides />
				<IphoneSlides />
			</div>
		</section>
	);
}
