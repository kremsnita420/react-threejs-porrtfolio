/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Tilt } from 'react-tilt';
import { fadeIn } from '../utils/motion';
import { motion } from 'framer-motion';
function ServiceCard({ index, title, icon }) {
	return (
		<Tilt className='w-full'>
			<motion.div
				variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
				className='w-full blue-yellow-gradient p-[1px] shadow-card'>
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className='bg-tertiary py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
					<img
						src={icon}
						alt='web-development'
						className='object-contain w-16 h-16'
					/>

					<h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
				</div>
			</motion.div>
		</Tilt>
	);
}

export default ServiceCard;
