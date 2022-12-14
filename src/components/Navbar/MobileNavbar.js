import React, { useState } from 'react';
import Darkmode from '../Darkmode/Darkmode';
import CV from '../../assets/CV.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function MobileNavbar({ handleClickScroll }) {
	const [opened, setOpened] = useState(false);

	return (
		<div className='md:hidden flex flex-col'>
			<FontAwesomeIcon
				className='w-8 h-8 hover:cursor-pointer self-end'
				icon={faBars}
				onClick={() => setOpened(!opened)}
			/>
			{opened && (
				<ul className='min-w-[170px] border dark:border-slate-500 rounded-md p-2 mt-5 text-center'>
					<li
						className='hover:cursor-pointer hover:bg-[#3b3a51] hover:text-white px-3 py-2 rounded-lg duration-200 h-fit'
						onClick={() => {
							handleClickScroll('about');
							setOpened(false);
						}}
					>
						about
					</li>

					<li
						className='hover:cursor-pointer hover:bg-[#3b3a51] hover:text-white px-3 py-2 rounded-lg duration-200 h-fit'
						onClick={() => {
							handleClickScroll('portofolio');
							setOpened(false);
						}}
					>
						portofolio
					</li>

					<a
						href={CV}
						onClick={() => setOpened(false)}
						download='CV Chitu Catalin'
					>
						<li className='hover:cursor-pointer hover:bg-[#3b3a51] hover:text-white px-3 py-2 rounded-lg duration-200 h-fit'>
							cv
							<FontAwesomeIcon className='text-xs px-1' icon={faDownload} />
						</li>
					</a>

					<li
						className='hover:cursor-pointer hover:bg-[#3b3a51] hover:text-white px-3 py-2 rounded-lg duration-200 h-fit'
						onClick={() => {
							handleClickScroll('contact');
							setOpened(false);
						}}
					>
						contact
					</li>

					<a
						href='https://github.com/catalingeorgechitu/'
						onClick={() => setOpened(false)}
						target='_blank'
						rel='noopener noreferrer nofollow'
					>
						<li className='hover:cursor-pointer hover:bg-[#3b3a51] hover:text-white px-3 py-2 rounded-lg duration-200 h-fit'>
							github
						</li>
					</a>
					<li className='hover:cursor-pointer px-3 py-2 rounded-lg flex justify-center'>
						<Darkmode />
					</li>
				</ul>
			)}
		</div>
	);
}
