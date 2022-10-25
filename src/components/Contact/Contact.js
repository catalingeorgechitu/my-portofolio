import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/fontawesome-free-brands';
import { faFacebook } from '@fortawesome/fontawesome-free-brands';
import { faGithub } from '@fortawesome/fontawesome-free-brands';

import profilePic from '../../assets/img/cartoon-me.png';
import Footer from '../Footer/Footer';

export default function Contact({ handleClickScroll }) {
	return (
		<>
			<div className='flex items-center justify-around w-full h-full'>
				<div className='contact-container font-bold text-xl'>
					<img
						className='w-20 h-20 rounded-full'
						src={profilePic}
						alt='Profile'
					/>
					<h3 className='font-bold text-4xl pt-5'>Catalin Chitu</h3>
					<p>Front-end Developer</p>
					<p>Bucharest</p>
					<p>0760 730 617</p>
					<p>catalin.george.chitu@gmail.com</p>
				</div>
				<div className='social-container flex flex-col'>
					<h3 className='font-bold text-4xl flex flex-col justify-center items-center'>
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
		</>
	);
}
