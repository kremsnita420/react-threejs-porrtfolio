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

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div className='relative z-0 bg-primary'>
					<div className='bg-center bg-no-repeat bg-cover bg-hero-pattern'>
						<Navbar />
						<Hero />
					</div>
					<About />
					<Experience />
					<Tech />
					<Works />

					<div className='relative z-0'>
						<Contact />
						<StarsCanvas />
					</div>
					<Footer />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
