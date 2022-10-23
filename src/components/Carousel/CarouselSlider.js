import React from 'react';
import { Carousel } from 'flowbite-react';
import macbook from '../../assets/img/macbook.png';
import iphone from '../../assets/img/iphone12pro.png';
import team1 from '../../assets/img/team-1.jpg';
import team2 from '../../assets/img/team-2.jpg';
import team3 from '../../assets/img/team-3.jpg';
import team4 from '../../assets/img/team-4.jpg';
import team1phone from '../../assets/img/team-1-phone.png';
import team2phone from '../../assets/img/team-2-phone.png';
import team3phone from '../../assets/img/team-3-phone.png';
import team4phone from '../../assets/img/team-4-phone.png';

export default function CarouselSlider() {
	return (
		<>
			<div className='macbook-container relative'>
				<div className='absolute top-[50px] left-[155px] h-[610px] w-[970px]'>
					<Carousel
						slideInterval={3000}
						leftControl={true}
						rightControl={true}
						indicators={false}
					>
						<img src={team1} alt='...' />
						<img src={team2} alt='...' />
						<img src={team3} alt='...' />
						<img src={team4} alt='...' />
					</Carousel>
				</div>
				<img className='absolute max-w-7xl' src={macbook} alt='MacBook' />
			</div>
			<div className='iphone-container relative h-[540px] w-[250px] overflow-hidden'>
				<div className='absolute top-[225px] right-[-300px] h-[540px] w-[970px] overflow-hidden'>
					<Carousel
						slideInterval={3000}
						leftControl={true}
						rightControl={true}
						indicators={false}
					>
						<img src={team1phone} alt='...' />
						<img src={team2phone} alt='...' />
						<img src={team3phone} alt='...' />
						<img src={team4phone} alt='...' />
					</Carousel>
				</div>
				<img
					className='scale-75 absolute right-0 top-[120px] min-w-[300px]'
					src={iphone}
					alt='iPhone 12 Pro'
				/>
			</div>
		</>
	);
}
