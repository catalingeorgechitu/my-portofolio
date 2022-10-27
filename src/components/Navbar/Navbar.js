import React from 'react';
import Darkmode from '../Darkmode/Darkmode';
import logo from '../../assets/img/logo.png';
import CV from '../../assets/CV.pdf';
import MobileNavbar from './MobileNavbar';

export default function Navbar({ handleClickScroll }) {
	return (
		<nav className='flex justify-between pt-10 px-5 xl:px-0'>
			<div onClick={() => handleClickScroll('home')}>
				<img
					className='w-10 h-10 md:w-12 md:h-12 bg-white p-0 rounded-full hover:cursor-pointer hover:scale-105 duration-200'
					src={logo}
					alt='Logo'
				/>
			</div>
			<ul className='gap-x-3 font-bold hidden md:flex'>
				<li
					className='hover:cursor-pointer hover:bg-[#3b3a51] px-3 py-2 rounded-lg duration-200'
					onClick={() => handleClickScroll('about')}
				>
					about
				</li>

				<li
					className='hover:cursor-pointer hover:bg-[#3b3a51] px-3 py-2 rounded-lg duration-200'
					onClick={() => handleClickScroll('portofolio')}
				>
					portofolio
				</li>

				<a href={CV} download='CV Chitu Catalin'>
					<li className='hover:cursor-pointer hover:bg-[#3b3a51] px-3 py-2 rounded-lg duration-200'>
						cv
					</li>
				</a>

				<li
					className='hover:cursor-pointer hover:bg-[#3b3a51] px-3 py-2 rounded-lg duration-200'
					onClick={() => handleClickScroll('contact')}
				>
					contact
				</li>

				<a
					href='https://github.com/catalingeorgechitu/'
					target='_blank'
					rel='noopener noreferrer nofollow'
				>
					<li className='hover:cursor-pointer hover:bg-[#3b3a51] px-3 py-2 rounded-lg duration-200'>
						github
					</li>
				</a>
				<li className='hover:cursor-pointer px-3 py-2 rounded-lg'>
					<Darkmode />
				</li>
			</ul>
			<MobileNavbar handleClickScroll={handleClickScroll} />
		</nav>
	);
}
