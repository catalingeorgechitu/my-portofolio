import React from 'react';
import macbook from '../../assets/img/macbook.png';
import iphone from '../../assets/img/iphone12pro.png';

export default function Slider() {
	return (
		<>
			<div>
				<img className='scale-100' src={macbook} alt='MacBook' />
			</div>
			<div>
				<img className='scale-75' src={iphone} alt='iPhone 12 Pro' />
			</div>
		</>
	);
}
