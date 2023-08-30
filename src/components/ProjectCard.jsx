/* eslint-disable react/prop-types */
import { github } from '../assets';
import { html } from '../assets/';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';
const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	live_site_link,
}) => {
	return (
		<motion.div variants={slideIn('left', 'tween', index * 0.5, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className='flex flex-col w-full h-full p-5 bg-tertiary rounded-2xl'>
				<div className='relative w-full h-[230px]'>
					<img
						src={image}
						alt='project_image'
						className='object-cover w-full h-full rounded-2xl'
					/>

					<div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
						<div
							onClick={() => window.open(live_site_link, '_blank')}
							className='flex items-center justify-center w-10 h-10 mr-2 rounded-full cursor-pointer black-gradient'>
							<img
								src={html}
								alt='source code'
								className='object-contain w-1/2 h-1/2'
							/>
						</div>
						<div
							onClick={() => window.open(source_code_link, '_blank')}
							className='flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient'>
							<img
								src={github}
								alt='source code'
								className='object-contain w-1/2 h-1/2'
							/>
						</div>
					</div>
				</div>

				<div className='my-5'>
					<h3 className='text-white font-bold text-[24px]'>{name}</h3>
					<p className='mt-2 text-secondary text-[14px]'>{description}</p>
				</div>
				<div className='flex flex-wrap gap-2 mt-auto'>
					{tags.map((tag) => (
						<p
							key={`${name}-${tag.name}`}
							className={`text-[14px] ${tag.color}`}>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};
export default ProjectCard;
