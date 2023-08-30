import { BrowserRouter } from 'react-router-dom';
import {
	About,
	Contact,
	Experience,
	Hero,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
} from './components';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

const App = () => {
	const [showTopBtn, setShowTopBtn] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 400) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		};
		window.addEventListener('scroll', () => {
			handleScroll();
		});

		// 👇️ remove the event listener when the component unmounts
		return () => {
			window.addEventListener('scroll', () => {
				handleScroll();
			});
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	return (
		<div>
			<BrowserRouter>
				<div className='relative z-0 bg-primary'>
					<div className='bg-center bg-no-repeat bg-cover bg-hero-pattern'>
						<Navbar />
						<Hero />
					</div>
					<About />
					<Works />
					<Tech />
					<Experience />
					<div className='relative z-0'>
						<Contact />
						<StarsCanvas />
					</div>
					<Footer />
					{showTopBtn && (
						<button
							onClick={goToTop}
							type='submit'
							className='fixed bottom-4 text-black font-bold w-fit right-6 md:right-10 bg-white/60 flex items-center justify-center px-2 py-1 mt-4 text-sm transition-transform border rounded-xl cursor-pointer hover:translate-y-[2px] hover:translate-x-[2px] md:text-xl'>
							Go to top
						</button>
					)}
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
