import { motion } from 'framer-motion';

import { styles } from '../styles';

import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import ProjectCard from './ProjectCard';

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My work</p>
				<h2 className={styles.sectionHeadText}>Projects.</h2>
			</motion.div>
			<div className='flex w-full'>
				<motion.p
					variants={fadeIn('', '', 0.1, 1)}
					className='mt-2 text-secondary text-[17px] max-w-3xl leading-[1.8]'>
					Following section showcases examples of my work. Each project is
					briefly described with links to code repositories and live demos in
					it. It reflects my ability to solve problems, work with different
					technologies, and manage projects effectively.
				</motion.p>
			</div>
			<div className='grid grid-cols-1 gap-10 mt-20 md:grid-cols-2 lg:grid-cols-3'>
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, '');
