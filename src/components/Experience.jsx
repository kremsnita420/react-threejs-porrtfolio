/* eslint-disable react/prop-types */
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import ExperienceCard from './ExperienceCard';
// 👇️ import the pdf document
import PdfResume from '/Safet_Duranovic_-_Frontend_Web_Developer.pdf';
const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Where I have worked so far</p>
				<h2 className={styles.sectionHeadText}>Work experience.</h2>
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
				<a
					href={PdfResume}
					download='Example-PDF-document'
					className='flex items-center w-fit justify-center px-4 py-2 mt-8 mx-auto text-lg transition-transform border rounded-xl cursor-pointer hover:translate-y-[2px] hover:translate-x-[2px] md:text-2xl'>
					Download Resume
				</a>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, 'work');
