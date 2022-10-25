import React from 'react';
import team1phone from '../../assets/img/cocktail-recipes-phone.jpg';
import team2phone from '../../assets/img/food-recipes-phone.jpg';
import team3phone from '../../assets/img/best-seo-agency-phone.jpg';
import team4phone from '../../assets/img/resume-builder-phone.jpg';
import iphone from '../../assets/img/iphone12pro.png';
import './IphoneSlides.css';

export default function IphoneSlides() {
	let iphoneCounter = 1;
	setInterval(function () {
		document.getElementById('iphone-radio' + iphoneCounter).checked = true;
		iphoneCounter++;
		if (iphoneCounter > 4) {
			iphoneCounter = 1;
		}
	}, 4000);

	return (
		<>
			<div className='iphone-big-slider-container absolute right-[57px] top-[210px] max-h-screen'>
				<div className='iphone-slider-container'>
					{/* <!--image slider start--> */}
					<div className='iphone-slider w-[255px] h-[537px] rounded-3xl overflow-hidden'>
						<div className='iphone-slides w-[500%] flex'>
							{/* <!--radio buttons start--> */}
							<input
								className='hidden'
								type='radio'
								name='iphone-radio-btn'
								id='iphone-radio1'
							/>
							<input
								className='hidden'
								type='radio'
								name='iphone-radio-btn'
								id='iphone-radio2'
							/>
							<input
								className='hidden'
								type='radio'
								name='iphone-radio-btn'
								id='iphone-radio3'
							/>
							<input
								className='hidden'
								type='radio'
								name='iphone-radio-btn'
								id='iphone-radio4'
							/>
							{/* <!--radio buttons end-->
                    <!--slide images start--> */}
							<div className='iphone-slide first duration-1000'>
								<img
									className='w-[255px] h-[537px]'
									src={team1phone}
									alt='team1'
								/>
							</div>
							<div className='iphone-slide duration-1000'>
								<img
									className='w-[255px] h-[537px]'
									src={team2phone}
									alt='team2'
								/>
							</div>
							<div className='iphone-slide duration-1000'>
								<img
									className='w-[255px] h-[537px]'
									src={team3phone}
									alt='team3'
								/>
							</div>
							<div className='iphone-slide duration-1000'>
								<img
									className='w-[255px] h-[537px]'
									src={team4phone}
									alt='team4'
								/>
							</div>
							{/* <!--slide images end--> */}
						</div>
					</div>
					{/* <!--image slider end--> */}
				</div>
			</div>
			<img
				className='scale-75 absolute right-0 top-[104px]'
				src={iphone}
				alt='iPhone 12 Pro'
			/>
		</>
	);
}
