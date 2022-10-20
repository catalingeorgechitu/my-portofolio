import useDarkMode from './useDarkMode';
import './Darkmode.css';

export default function Darkmode() {
	const [colorTheme, setTheme] = useDarkMode();

	return (
		<div onClick={() => setTheme(colorTheme)}>
			{colorTheme === 'light' ? (
				<div className='dark-bg'>
					<div className='dark-button'></div>
				</div>
			) : (
				<div className='light-bg'>
					<div className='light-button'></div>
				</div>
			)}
		</div>
	);
}
