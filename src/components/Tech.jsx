/* eslint-disable react-refresh/only-export-components */
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { techList } from '../constants';
import { textVariant, zoomIn, slideIn, fadeIn } from '../utils/motion';
import { motion } from 'framer-motion';
import { styles } from '../styles';
const Tech = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Technologies I&apos;m working with</p>
				<h2 className={styles.sectionHeadText}>Tech stack.</h2>
			</motion.div>
			<motion.div
				variants={fadeIn()}
				className='flex flex-row flex-wrap justify-center gap-10 my-7'>
				{technologies.map((technology) => (
					<div
						className='w-28 h-28'
						key={technology.name}>
						<BallCanvas icon={technology.icon} />
					</div>
				))}
			</motion.div>

			<motion.ul
				variants={zoomIn()}
				className='flex flex-wrap justify-center py-4 md:py-7'>
				{techList.map((tech) => (
					<li
						className={`${styles.techText} ml-4 mb-4 rounded-md px-4 border`}
						key={tech}>
						{tech}
					</li>
				))}
			</motion.ul>
		</>
	);
};

export default SectionWrapper(Tech, 'tech');
