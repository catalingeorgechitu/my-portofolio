import React from 'react';
import profilePic from '../../assets/img/cartoon-me.png';

export default function About() {
	return (
		<>
			<h1 className='text-5xl max-w-3xl text-center'>
				Hi, I'm Catalin and I'm a Junior Front-end Developer
			</h1>
			<p className='text-3xl pt-10'>I like to keep it simple...or do I?</p>
			<div className='pt-20 flex gap-x-14 max-w-4xl'>
				<img
					className='w-64 h-64 rounded-full'
					src={profilePic}
					alt='Profile picture'
				/>
				<p className='text-lg text-center my-auto'>
					With the help of a very well defined set of skills in the areas of
					analysis, data interpretation and automation, with over 7 years of
					experience in data analysis software, ERP implementation in the
					financial department and automation of flows and reports, I decided to
					take the step in the world of automation and programming to help
					companies achieve their goals, starting with front-end development and
					progressing to full-stack development in the future.
				</p>
			</div>
		</>
	);
}
