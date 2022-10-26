import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import LandingPage from './components/LandingPage/LandingPage';
import Portofolio from './components/Portofolio/Portofolio';
import Slider from './components/Slider/Slider';

function App() {
	function handleClickScroll(elem) {
		document.getElementById(elem).scrollIntoView({ behavior: 'smooth' });
	}

	return (
		<div className='dark:bg-[#23252f] text-[#001925] dark:text-white duration-500'>
			<div className='mx-auto h-screen lg:snap-y lg:snap-mandatory overflow-y-scroll lg:px-0'>
				<LandingPage handleClickScroll={handleClickScroll} />
				<Slider />
				<About />
				<Portofolio />
				<Contact handleClickScroll={handleClickScroll} />
			</div>
		</div>
	);
}

export default App;
