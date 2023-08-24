const name = 'Safet Duranovic';

const Footer = () => {
	return (
		<footer className='flex flex-col items-center justify-center py-4 text-2xl text-center md:mt-8'>
			made by{' '}
			<a
				className='flex px-4 py-3'
				target='_blank'
				rel='noreferrer'
				href='https://www.linkedin.com/in/safet-duranovic/'>
				{name.split('').map((n, i) => (
					<span
						key={`letter-${i}`}
						className={`block px-1 text-2xl md:text-4xl font-display`}>
						{n}
					</span>
				))}
			</a>{' '}
			{new Date().getFullYear()}
		</footer>
	);
};

export default Footer;
