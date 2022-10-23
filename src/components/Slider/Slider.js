import React from 'react';
import IphoneSlides from './IphoneSlides';
import MacBookSlides from './MacBookSlides';

export default function Slider() {
	return (
		<div className='relative'>
			<MacBookSlides />
			<IphoneSlides />
		</div>
	);
}
