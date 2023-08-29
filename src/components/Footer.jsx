import { motion } from 'framer-motion';
const name = 'Safet Duranovic';

const Footer = () => {
	return (
		<motion.footer className='flex flex-col items-center justify-center py-4 text-2xl text-center bg-primary md:mt-8'>
			made by{' '}
			<a
				className='flex px-4 py-3'
				target='_blank'
				rel='noreferrer'
				href='https://www.linkedin.com/in/safet-duranovic/'>
				<>
					{name.split('').map((letter, i) => (
						<motion.span
							animate={{
								y: [0, 12, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								delay: i * 0.33,
								repeatType: 'loop',
							}}
							key={`letter-${i}`}
							className={`block px-1 text-2xl md:text-4xl font-display`}>
							{letter}
						</motion.span>
					))}
				</>
			</a>{' '}
			<a
				target='_blank'
				rel='noreferrer'
				href='mailto:duranovic.safet@gmail.com'
				className={`block text-xl md:text-2xl my-4 font-base`}>
				duranovic.safet@gmail.com
			</a>
			{new Date().getFullYear()}
		</motion.footer>
	);
};

export default Footer;
