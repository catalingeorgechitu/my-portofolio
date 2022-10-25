import React from 'react';
import profilePic from '../../assets/img/cartoon-me.png';
import realProfilePic from '../../assets/img/real-me.png';


export default function About() {
	return (
		<div className='bg-[#1a1c23] flex  items-center flex-col w-full py-16 text-white'>
			<h1 className='text-5xl max-w-3xl text-center'>
				Hi, I'm Catalin and I'm a Front-end Developer
			</h1>
			<p className='text-3xl pt-8'>I like to keep it simple...or do I?</p>
			<div className='pt-16 flex gap-x-14 max-w-4xl relative'>
				<img
					className='w-64 h-64 rounded-full'
					src={realProfilePic}
					alt='Profile picture'
				/>
				<img
					className='w-64 h-64 rounded-full absolute hover:opacity-0 duration-300'
					src={profilePic}
					alt='Profile picture'
				/>
				<p className='text-lg text-center my-auto'>
					With the help of a very well defined set of skills in the areas of
					analysis, data interpretation and automation, with over 7 years of
					experience in data analysis software, ERP implementation for the
					financial department and automation of flows and reports, I decided to
					take a step further, into the world of automation and programming, in
					order to help companies achieve their goals by starting with front-end
					development and progressing to full-stack development in the future.
				</p>
			</div>
		</div>
	);
}
