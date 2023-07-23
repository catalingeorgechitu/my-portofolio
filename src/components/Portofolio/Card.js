import React from 'react';

export default function Card({
	projectLink,
	projectImg,
	projectTags,
	projectTitle,
	projectDescription,
	projectGithubLink,
}) {
	return (
		<div className='max-w-[380px] bg-white rounded-lg shadow-md dark:bg-[#1a1c23] group'>
			<a href={projectLink} target='_blank' rel='noreferrer noopener nofollow'>
				<img
					className='rounded-t-lg group-hover:-translate-y-2 duration-200'
					src={projectImg}
					alt=''
				/>
			</a>
			<ul className='gap-1 text-xs pt-1 px-5 flex flex-wrap'>
				{projectTags.map(tag => (
					<li
						key={tag}
						className='border border-gray-400 rounded-md px-1 w-fit'
					>
						{tag}
					</li>
				))}
			</ul>
			<div className='px-5 py-2 flex flex-col'>
				<a
					href={projectLink}
					target='_blank'
					rel='noreferrer noopener nofollow'
				>
					<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
						{projectTitle}
					</h5>
				</a>
				<p className='mb-1 font-normal text-gray-700 dark:text-gray-400 h-32 overflow-auto'>
					{projectDescription}
				</p>
				<a
					href={projectGithubLink}
					target='_blank'
					rel='noreferrer noopener nofollow'
					className='w-fit mx-auto py-2 px-3 text-sm font-medium text-center text-white bg-slate-600 rounded-lg hover:bg-slate-700 focus:ring-2 focus:outline-none focus:ring-slate-900'
				>
					Github code
				</a>
			</div>
		</div>
	);
}
