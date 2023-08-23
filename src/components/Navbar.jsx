import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close, linkedin, github, pdf } from '../assets';

const Navbar = () => {
	const [active, setActive] = useState('');
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 100) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav
			className={`${
				styles.paddingX
			} w-full flex items-center py-5 fixed top-0 z-20 ${
				scrolled ? 'bg-primary' : 'bg-transparent'
			}`}>
			<div className='flex items-center justify-between w-full mx-auto max-w-7xl'>
				<Link
					to='/'
					className='flex items-center gap-2'
					onClick={() => {
						setActive('');
						window.scrollTo(0, 0);
					}}>
					<img src={logo} alt='Logo' className='flex object-contain w-9 h-9' />
					<p className='text-white text-[18px] font-bold cursor-pointer flex'>
						Safet&nbsp;<span className='hidden sm:block'>|&nbsp;Duranovic</span>
					</p>
				</Link>
				<ul className='flex-row hidden gap-10 list-none sm:flex'>
					{navLinks.map((link) => (
						<li
							key={link.id}
							className={`${
								active === link.title ? 'text-white' : 'text-secondary'
							} hover:text-white transition-colors origin-center text-[20px] font-medium cursor-pointer`}
							onClick={() => setActive(link.title)}>
							<a href={`#${link.id}`}>{link.id}</a>
						</li>
					))}
				</ul>

				<div className='flex items-center justify-end flex-1 sm:hidden'>
					<img
						src={toggle ? close : menu}
						alt='Menu'
						className='w-[28px] h-[28px] object-contain cursor-pointer'
						onClick={() => setToggle(!toggle)}
					/>
					<div
						className={`${
							!toggle ? 'hidden' : 'flex'
						} p-6 black-gradient absolute top-[55px] right-[2.5%] my-2 w-[95%] h-[89vh] min-h-[500px] z-10 rounded-xl`}>
						<ul className='flex flex-col items-center justify-center gap-4 m-auto list-none'>
							{navLinks.map((link) => (
								<li
									key={link.id}
									className={`${
										active === link.title ? 'text-white' : 'text-secondary'
									} font-poppins font-medium cursor-pointer text-[20px]`}
									onClick={() => {
										setToggle(!toggle);
										setActive(link.title);
									}}>
									<a href={`#${link.id}`}>{link.id}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div
				onClick={() =>
					window.open(
						'https://drive.google.com/file/d/1adz-Zj-V_qFf7-wcD45sWJqFxm0QU4st/view?usp=sharing',
						'_blank'
					)
				}
				className='flex items-center justify-center w-10 h-10 mr-4 bg-red-600 rounded-full cursor-pointer'>
				<img
					title='Download resume'
					src={pdf}
					alt='source code'
					className='object-contain w-1/2 h-1/2'
				/>
			</div>
			<div
				onClick={() =>
					window.open('https://www.linkedin.com/in/safet-duranovic/', '_blank')
				}
				className='flex items-center justify-center w-10 h-10 bg-blue-700 rounded-full cursor-pointer'>
				<img
					src={linkedin}
					title='Linkedin'
					alt='source code'
					className='object-contain w-1/2 h-1/2'
				/>
			</div>
			<div
				onClick={() => window.open('https://github.com/kremsnita420', '_blank')}
				className='flex items-center justify-center w-10 h-10 ml-4 rounded-full cursor-pointer black-gradient'>
				<img
					src={github}
					title='Github'
					alt='source code'
					className='object-contain w-1/2 h-1/2'
				/>
			</div>
		</nav>
	);
};

export default Navbar;
