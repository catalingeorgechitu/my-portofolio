import React from 'react';
import profilePic from '../../assets/img/cartoon-me.png';
import realProfilePic from '../../assets/img/real-me.png';
export default function About() {
	return (
		<section
			id='about'
			className='lg:h-screen snap-start mx-auto flex justify-center items-center py-10 lg:py-0'
		>
			<div className='bg-slate-500 dark:bg-[#1a1c23] flex items-center flex-col w-full py-16 px-5 text-white'>
				<h1 className='text-3xl sm:text-4xl md:text-5xl max-w-3xl text-center'>
					Hi, I'm Catalin and I'm a Front-end Developer
				</h1>
				<p className='text-xl sm:text-2xl md:text-3xl pt-8'>
					I like to keep it simple...or do I?
				</p>
				<div className='pt-6 md:pt-16 flex flex-wrap md:flex-nowrap gap-x-14 max-w-4xl relative justify-center md:justify-start'>
					<img
						className='w-24 h-24 md:w-32 md:h-32 lg:w-64 lg:h-64 rounded-full'
						src={realProfilePic}
						alt='Profile'
					/>
					<img
						className='w-24 h-24 md:w-32 md:h-32 lg:w-64 lg:h-64 rounded-full absolute hover:opacity-0 duration-300'
						src={profilePic}
						alt='Profile'
					/>
					<p className='text-lg text-center my-auto'>
						With the help of a very well defined set of skills in the areas of
						analysis, data interpretation and automation, with over 7 years of
						experience in data analysis software, ERP implementation for the
						financial department and automation of flows and reports, I decided
						to take a step further, into the world of automation and
						programming, in order to help companies achieve their goals by
						starting with front-end development and progressing to full-stack
						development in the future.
					</p>
				</div>
			</div>
		</section>
	);
}
