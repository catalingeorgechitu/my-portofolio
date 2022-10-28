import React from 'react';
import img1 from '../../assets/img/cocktail-recipes.jpg';
import img2 from '../../assets/img/movie-app.jpg';
import img3 from '../../assets/img/resume-builder.jpg';
import img4 from '../../assets/img/emag-clone.jpg';
import img5 from '../../assets/img/food-recipes.jpg';
import img6 from '../../assets/img/best-seo-agency.jpg';
import Card from './Card';

export default function Portofolio() {
	return (
		<section
			id='portofolio'
			className='lg:h-screen snap-start max-w-7xl mx-auto flex items-center '
		>
			<div className='flex flex-wrap gap-6 items-center justify-center'>
				<Card
					projectLink='https://cocktails-receipes.netlify.app/'
					projectImg={img1}
					projectTags={[
						'HTML',
						'TailwindCSS',
						'JavaScript',
						'Responsive',
						'API',
					]}
					projectTitle='Cocktail recipes'
					projectDescription='This project was designed for a client who has a bar in the living
					room, and needed an application with several cocktail recipes plus
					other requested features such as adding recipes to favorites.'
					projectGithubLink='https://github.com/catalingeorgechitu/projects/tree/main/cocktail-recipes'
				/>

				<Card
					projectLink='https://imdb-movies-app.netlify.app/'
					projectImg={img2}
					projectTags={['React', 'TailwindCSS', 'Responsive', 'API']}
					projectTitle='IMDb Movie app'
					projectDescription='Probably the most complex project in this portfolio, it was
					built to provide a quick method to check new movies on the
					market, to find movies similar to your preferences more quickly
					and to add movies to favorites without having to create a
					account.'
					projectGithubLink='#'
				/>

				<Card
					projectLink='https://easyresumebuilder.netlify.app'
					projectImg={img3}
					projectTags={['HTML', 'TailwindCSS', 'Javascript', 'Responsive']}
					projectTitle='Resume builder'
					projectDescription='As the title mentions, this application helps you create a
					modern, simple CV, which you can download and use to apply for
					employment.'
					projectGithubLink='https://github.com/catalingeorgechitu/projects/tree/main/resume-creator'
				/>

				<Card
					projectLink='https://emag-page-clone.netlify.app/'
					projectImg={img4}
					projectTags={['HTML', 'TailwindCSS', 'Unresponsive']}
					projectTitle='eMAG clone'
					projectDescription='This project is a desktop clone of the well-known Romanian site
					eMAG.ro. This project has no functionality, only the design
					being implemented.'
					projectGithubLink='https://github.com/catalingeorgechitu/projects/tree/main/eMAG-page'
				/>

				<Card
					projectLink='https://easy-recipe-clone.netlify.app'
					projectImg={img5}
					projectTags={['HTML', 'TailwindCSS', 'Responsive']}
					projectTitle='Food recipes'
					projectDescription='One of the earliest responsive projects I created with Tailwind
					CSS. It presents a modern, simple design, ready to be used as
					template for sites of this kind.'
					projectGithubLink='https://github.com/catalingeorgechitu/projects/tree/main/tailwind-design'
				/>

				<Card
					projectLink='https://seo-agency-template.netlify.app'
					projectImg={img6}
					projectTags={['HTML', 'TailwindCSS', 'Responsive']}
					projectTitle='SEO Agency'
					projectDescription='With a modern and responsive design, this landing page template
					can be used by companies with lower budget for web development.'
					projectGithubLink='https://github.com/catalingeorgechitu/projects/tree/main/seo-agency'
				/>
			</div>
		</section>
	);
}
