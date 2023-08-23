import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>
			<motion.p
				variants={fadeIn('', '', 0.1, 1)}
				className='mt-4 text-secondary text-[17px] max-w-3xl leading-[1.8]'>
				I&apos;m a Frontend developer with experience in Html, CSS/Sass,
				JavaScript, and frameworks like React, Tailwind, Node.js, and Three.js.
				I&apos;m a quick learner and collaborate closely with clients to create
				efficient, scalable, and user-friendly solutions that solve real-world
				problems. Let&apos;s work together to bring your ideas to life!
			</motion.p>

			<div className='grid grid-cols-1 gap-10 mt-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, 'about');
