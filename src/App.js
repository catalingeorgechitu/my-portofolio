import './App.css';
import About from './components/About/About';
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';

function App() {
	function handleClickScroll(elem) {
		document.getElementById(elem).scrollIntoView({ behavior: 'smooth' });
	}

	return (
		<div className='dark:bg-[#23252f] text-[#001925] dark:text-white duration-500'>
			<div className='mx-auto h-screen snap-y snap-mandatory overflow-y-scroll'>
				{/*sa redenumesc classNmae-ul in 'snap esction'*/}
				<section className='h-screen max-w-7xl mx-auto snap-start flex flex-col'>
					<header>
						<Navbar handleClickScroll={handleClickScroll} />
					</header>
					<main className='flex flex-col justify-center my-auto relative h-full'>
						<LandingPage handleClickScroll={handleClickScroll} />
					</main>
				</section>
				{/*sa redenumesc classNmae-ul in 'snap esction'*/}
				<section
					id='slider'
					className='h-screen snap-start max-w-7xl mx-auto pt-20'
				>
					<Slider />
				</section>
				<section
					id='about'
					className='h-screen snap-start max-w-7xl mx-auto flex justify-center items-center flex-col'
				>
					<About />
				</section>
			</div>
		</div>
	);
}

export default App;
