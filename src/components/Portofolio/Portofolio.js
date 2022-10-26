import React from 'react';
import img1 from '../../assets/img/cocktail-recipes.jpg';
import img2 from '../../assets/img/movie-app.jpg';
import img3 from '../../assets/img/resume-builder.jpg';
import img4 from '../../assets/img/emag-clone.jpg';
import img5 from '../../assets/img/food-recipes.jpg';
import img6 from '../../assets/img/best-seo-agency.jpg';

export default function Portofolio() {
	return (
		<section
			id='portofolio'
			className='lg:h-screen snap-start max-w-7xl mx-auto flex items-center'
		>
			<div className='flex flex-wrap gap-x-10 gap-y-14 items-center justify-center '>
				<a
					href='https://cocktails-receipes.netlify.app/'
					target='_blank'
					rel='noopener noreferrer nofollow'
				>
					<article className='card w-[280px] xl:w-[400px] flex flex-col group hover:cursor-pointer'>
						<img
							className='rounded-xl h-[180px] xl:h-[250px] group-hover:-translate-y-3 duration-200'
							src={img1}
							alt='Cocktail recipes'
						/>
						<div className='h-[150px] px-1'>
							<div className='gap-1 text-xs pt-1 flex flex-wrap'>
								<p className='border border-gray-400 rounded-md px-1 w-fit'>
									HTML
								</p>
								<p className='border border-gray-400 rounded-md px-1 w-fit w-full'>
									Tailwind CSS
								</p>
								<p className='border border-gray-400 rounded-md px-1 w-fit'>
									JavaScript
								</p>
								<p className='border border-gray-400 rounded-md px-1 w-fit'>
									Responsive
								</p>
								<p className='border border-gray-400 rounded-md px-1 w-fit'>
									API
								</p>
							</div>
							<h3 className='font-bold text-lg xl:text-xl pt-1 xl:pt-3'>
								Cocktail recipes
							</h3>
							<p className='xl:pt-1 text-sm xl:text-base'>
								This project was designed for a client who has a bar in the
								living room, and needed an application with several cocktail
								recipes plus other requested features such as adding recipes to
								favorites.
							</p>
						</div>
					</article>
				</a>

				<a
					href='https://imdb-movies-app.netlify.app/'
					target='_blank'
					rel='noopener noreferrer nofollow'
				>
					<article className='card w-[280px] xl:w-[400px] flex flex-col group hover:cursor-pointer'>
						<img
							className='rounded-xl h-[180px] xl:h-[250px] group-hover:-translate-y-3 duration-200'
							src={img2}
							alt='Movie app'
						/>
						<div className='h-[150px] px-1'>
							<div className='gap-1 text-xs pt-1 flex flex-wrap'>
								<p className='border border-gray-400 rounded-md px-1 w-fit'>
									React
								</p>
								<p className='border border-gray-400 rounded-md px-1 w-fit'>
									Tailwind CSS
								</p>
								<p className='border border-gray-400 rounded-md px-1 w-fit'>
									Responsive
								</p>
								<p className='border border-gray-400 rounded-md px-1 w-fit'>
									API
								</p>
							</div>
							<h3 className='font-bold text-lg xl:text-xl pt-1 xl:pt-3'>
								IMDb Movie app
							</h3>
							<p className='xl:pt-1 text-sm xl:text-base'>
								Probably the most complex project in this portfolio, it was
								built to provide a quick method to check new movies on the
								market, to find movies similar to your preferences more quickly
								and to add movies to favorites without having to create a
								account.
							</p>
						</div>
					</article>
				</a>

				<a
					href='https://easyresumebuilder.netlify.app'
					target='_blank'
					rel='noopener noreferrer nofollow'
				>
					<article className='card w-[280px] xl:w-[400px] flex flex-col group hover:cursor-pointer'>
						<img
							className='rounded-xl h-[180px] xl:h-[250px] group-hover:-translate-y-3 duration-200'
							src={img3}
							alt='Resume builder'
						/>
						<div className='h-[150px] px-1'>
							<div className='gap-1 text-xs pt-1 flex flex-wrap'>
								<p className='border border-gray-400 rounded-md px-1 w-fit'>
									HTML
								</p>
								<p className='border border-gray-400 rounded-md px-1 w-fit'>
									Tailwind CSS
								</p>
								<p className='border border-gray-400 rounded-md px-1 w-fit'>
									JavaScript
								</p>
								<p className='border border-gray-400 rounded-md px-1 w-fit'>
									Responsive
								</p>
							</div>
							<h3 className='font-bold text-lg xl:text-xl pt-1 xl:pt-3'>
								Resume builder
							</h3>
							<p className='xl:pt-1 text-sm xl:text-base'>
								As the title mentions, this application helps you create a
								modern, simple CV, which you can download and use to apply for
								employment.
							</p>
						</div>
					</article>
				</a>

				<a
					href='https://emag-page-clone.netlify.app/'
					target='_blank'
					rel='noopener noreferrer nofollow'
				>
					<article className='card w-[280px] xl:w-[400px] flex flex-col group hover:cursor-pointer'>
						<img
							className='rounded-xl h-[180px] xl:h-[250px] group-hover:-translate-y-3 duration-200'
							src={img4}
							alt='Emag clone'
						/>
						<div className='h-[150px] px-1'>
							<div className='gap-1 text-xs pt-1 flex flex-wrap'>
								<p className='border border-gray-400 rounded-md px-1 w-fit'>
									HTML
								</p>
								<p className='border border-gray-400 rounded-md px-1 w-fit'>
									Tailwind CSS
								</p>
								<p className='border border-gray-400 rounded-md px-1 w-fit'>
									Unresponsive
								</p>
							</div>
							<h3 className='font-bold text-lg xl:text-xl pt-1 xl:pt-3'>
								eMAG clone
							</h3>
							<p className='xl:pt-1 text-sm xl:text-base'>
								This project is a desktop clone of the well-known Romanian site
								eMAG.ro. This project has no functionality, only the design
								being implemented.
							</p>
						</div>
					</article>
				</a>

				<a
					href='https://easy-recipe-clone.netlify.app'
					target='_blank'
					rel='noopener noreferrer nofollow'
				>
					<article className='card w-[280px] xl:w-[400px] flex flex-col group hover:cursor-pointer'>
						<img
							className='rounded-xl h-[180px] xl:h-[250px] group-hover:-translate-y-3 duration-200'
							src={img5}
							alt='Food recipes'
						/>
						<div className='h-[150px] px-1'>
							<div className='gap-1 text-xs pt-1 flex flex-wrap'>
								<p className='border border-gray-400 rounded-md px-1 w-fit'>
									HTML
								</p>
								<p className='border border-gray-400 rounded-md px-1 w-fit'>
									Tailwind CSS
								</p>
								<p className='border border-gray-400 rounded-md px-1 w-fit'>
									Responsive
								</p>
							</div>
							<h3 className='font-bold text-lg xl:text-xl pt-1 xl:pt-3'>
								Food recipes
							</h3>
							<p className='xl:pt-1 text-sm xl:text-base'>
								One of the earliest responsive projects I created with Tailwind
								CSS. It presents a modern, simple design, ready to be used as
								template for sites of this kind.
							</p>
						</div>
					</article>
				</a>

				<a
					href='https://seo-agency-template.netlify.app'
					target='_blank'
					rel='noopener noreferrer nofollow'
				>
					<article className='card w-[280px] xl:w-[400px] flex flex-col group hover:cursor-pointer'>
						<img
							className='rounded-xl h-[180px] xl:h-[250px] group-hover:-translate-y-3 duration-200'
							src={img6}
							alt='SEO Agency'
						/>
						<div className='h-[150px] px-1'>
							<div className='gap-1 text-xs pt-1 flex flex-wrap'>
								<p className='border border-gray-400 rounded-md px-1 w-fit'>
									HTML
								</p>
								<p className='border border-gray-400 rounded-md px-1 w-fit'>
									Tailwind CSS
								</p>
								<p className='border border-gray-400 rounded-md px-1 w-fit'>
									Responsive
								</p>
							</div>
							<h3 className='font-bold text-lg xl:text-xl pt-1 xl:pt-3'>
								SEO Agency
							</h3>
							<p className='xl:pt-1 text-sm xl:text-base'>
								With a modern and responsive design, this landing page template
								can be used by companies with lower budget for web development.
							</p>
						</div>
					</article>
				</a>
			</div>
		</section>
	);
}
