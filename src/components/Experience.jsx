/* eslint-disable react/prop-types */
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Where I have worked so far</p>
				<h2 className={styles.sectionHeadText}>Work experience.</h2>
				<button
					onClick={() =>
						window.open(
							'https://drive.google.com/file/d/1adz-Zj-V_qFf7-wcD45sWJqFxm0QU4st/view?usp=sharing',
							'_blank'
						)
					}
					className='flex items-center justify-center px-4 py-2 mt-4 text-lg transition-transform border rounded-xl cursor-pointer hover:translate-y-[2px] hover:translate-x-[2px] md:text-2xl'>
					Download Resume
				</button>
			</motion.div>

			<div className='flex flex-col mt-20'>
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard
							key={index}
							experience={experience}
						/>
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, 'work');
