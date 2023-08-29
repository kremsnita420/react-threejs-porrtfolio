import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
const name = "Hi, I'm Safet";

const Hero = () => {
	return (
		<section className='relative w-full h-[100dvh] mx-auto'>
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
				<div className='flex flex-col items-center justify-center mt-5'>
					<div className='w-5 h-5 rounded-full c'></div>
					<div className='w-1 h-40 sm:h-80 violet-gradient'></div>
				</div>
				<div>
					<h1 className={`${styles.heroHeadText} mb-4 flex`}>
						{' '}
						{name.split(' ').map((n, i) => (
							<span
								key={`letter-${i}`}
								className={`block pr-4 font-display`}>
								{n}
							</span>
						))}
					</h1>
					<p className={`${styles.heroSubText}`}>
						Frontend developer with passion <br className='hidden sm:block' />
						for building amazing websites,
						<br className='hidden sm:block' /> and learning new technologies
						<span className='text-4xl md:text-7xl leading-[0] md:leading-[0] font-display'>
							.
						</span>
					</p>
				</div>
			</div>
			<ComputersCanvas />
			<div className='absolute flex items-center justify-center w-full bottom-10'>
				<a href='#about'>
					<div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
						<motion.div
							animate={{
								y: [0, 24, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className='w-3 h-3 mb-1 rounded-full bg-secondary'
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
