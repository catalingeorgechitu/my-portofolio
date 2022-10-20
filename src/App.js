import './App.css';
import Darkmode from './components/Darkmode/Darkmode';
import LandingPage from './components/LandingPage/LandingPage';
import Slider from './components/Slider/Slider';

function App() {
	return (
		<div className='dark:bg-[#23252f] text-[#001925] dark:text-white duration-500 min-h-screen'>
			<div className='container mx-auto max-w-7xl'>
				<header>
					<Darkmode />
				</header>
				<main className='flex flex-col justify-center mx-auto'>
					<LandingPage />
					<Slider />
				</main>
			</div>
		</div>
	);
}

export default App;
