import React from 'react';
import team1 from '../../assets/img/cocktail-recipes.jpg';
import team2 from '../../assets/img/food-recipes.jpg';
import team3 from '../../assets/img/best-seo-agency.jpg';
import team4 from '../../assets/img/movie-app.jpg';
import macbook from '../../assets/img/macbook.png';
import './MacBookSlides.css';

export default function MacBookSlides() {
	let counter = 1;
	setInterval(function () {
		document.getElementById('radio' + counter).checked = true;
		counter++;
		if (counter > 4) {
			counter = 1;
		}
	}, 4000);

	return (
		<div className='hidden md:block macbook relative scale-50 lg:scale-75 xl:scale-100 w-full h-full'>
			<div className='macbook-slider-container absolute top-[53px] left-[157px]'>
				<div className='slider-container'>
					{/* <!--image slider start--> */}
					<div className='slider w-[965px] h-[602px] overflow-hidden'>
						<div className='slides w-[500%] flex'>
							{/* <!--radio buttons start--> */}
							<input
								className='hidden peer/one'
								type='radio'
								name='radio-btn'
								id='radio1'
							/>
							<input
								className='hidden peer/two'
								type='radio'
								name='radio-btn'
								id='radio2'
							/>
							<input
								className='hidden peer/three'
								type='radio'
								name='radio-btn'
								id='radio3'
							/>
							<input
								className='hidden peer/four'
								type='radio'
								name='radio-btn'
								id='radio4'
							/>
							{/* <!--radio buttons end--> */}
							{/* <!--slide images start--> */}
							<div className='slide first w-[20%] duration-1000 ease-in-out peer-checked/{one}:bg-red-400 peer-checked/{two}:ml-[-20%] peer-checked/three:ml-[-40%] peer-checked/four:ml-[-60%]'>
								<img className='w-[965px] h-[602px]' src={team1} alt='team1' />
							</div>
							<div className='slide w-[20%] duration-1000 ease-in-out'>
								<img className='w-[965px] h-[602px]' src={team2} alt='team2' />
							</div>
							<div className='slide w-[20%] duration-1000 ease-in-out'>
								<img className='w-[965px] h-[602px]' src={team3} alt='team3' />
							</div>
							<div className='slide w-[20%] duration-1000 ease-in-out'>
								<img className='w-[965px] h-[602px]' src={team4} alt='team4' />
							</div>
							{/* <!--slide images end--> */}
							{/* <!--automatic navigation start--> */}
							<div className='navigation-auto absolute flex w-[965px] justify-around mt-[720px]'>
								<div className='auto-btn1 border-transparent border-solid border-b-2 p-1 duration-500 dark:border-[#3b3a51]'>
									Cocktail recipes
								</div>
								<div className='auto-btn2 border-transparent border-solid border-b-2 p-1 duration-500 dark:border-[#3b3a51]'>
									Food recipes
								</div>
								<div className='auto-btn3 border-transparent border-solid border-b-2 p-1 duration-500 dark:border-[#3b3a51]'>
									SEO Agency
								</div>
								<div className='auto-btn4 border-transparent border-solid border-b-2 p-1 duration-500 dark:border-[#3b3a51]'>
									Movie app
								</div>
							</div>
							{/* <!--automatic navigation end--> */}
						</div>
					</div>
					{/* <!--image slider end--> */}
				</div>
			</div>
			<img className='absolute min-w-[1280px]' src={macbook} alt='MacBook' />
		</div>
	);
}
