import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/fontawesome-free-brands';
import { faFacebook } from '@fortawesome/fontawesome-free-brands';
import { faGithub } from '@fortawesome/fontawesome-free-brands';

import profilePic from '../../assets/img/cartoon-me.png';
import Footer from '../Footer/Footer';

export default function Contact({ handleClickScroll }) {
	return (
		<section
			id='contact'
			className='mx-auto flex snap-start flex-col items-center pt-10 lg:h-screen lg:py-0'
		>
			<div className='flex flex-col gap-2 lg:gap-0 lg:flex-row items-center justify-around w-full h-full py-10 mb-20 lg:my-40 bg-[#1a1c23] text-white'>
				<div className='contact-container text-center text-base font-bold lg:text-start xl:text-xl'>
					<img
						className='mx-auto h-20 w-20 rounded-full lg:mx-0'
						src={profilePic}
						alt='Profile'
					/>
					<h3 className='pt-5 text-2xl font-bold xl:text-4xl'>Catalin Chitu</h3>
					<p>Front-end Developer</p>
					<p>Bucharest</p>
					<p>0760 730 617</p>
					<p>catalin.george.chitu@gmail.com</p>
				</div>

				<div className='social-container flex flex-col'>
					<h3 className='font-bold text-2xl xl:text-4xl flex flex-col justify-center items-center'>
						Social
					</h3>
					<div className='flex gap-3 pt-3'>
						<a
							href='https://www.linkedin.com/in/catalin-george-chitu-571b67b4/'
							target='_blank'
							rel='noopener noreferrer nofollow'
						>
							<FontAwesomeIcon className='h-6 w-6' icon={faLinkedin} />
						</a>
						<a
							href='https://github.com/catalingeorgechitu/'
							target='_blank'
							rel='noopener noreferrer nofollow'
						>
							<FontAwesomeIcon className='h-6 w-6' icon={faGithub} />
						</a>
						<a
							href='https://www.facebook.com/cata.doddy/'
							target='_blank'
							rel='noopener noreferrer nofollow'
						>
							<FontAwesomeIcon className='h-6 w-6' icon={faFacebook} />
						</a>
						<a
							href='https://www.instagram.com/cata.doddy/'
							target='_blank'
							rel='noopener noreferrer nofollow'
						>
							<FontAwesomeIcon className='h-6 w-6' icon={faInstagram} />
						</a>
					</div>
					<button
						className='pt-10 underline underline-offset-2'
						onClick={() => handleClickScroll('home')}
					>
						Back to Home
					</button>
				</div>
			</div>
			<Footer />
		</section>
	);
}
