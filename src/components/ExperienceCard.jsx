/* eslint-disable react/prop-types */
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const ExperienceCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: '#1d1836',
				color: '#fff',
			}}
			contentArrowStyle={{ borderRight: '7px solid  #232631' }}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className='flex items-center justify-center w-full h-full'>
					<img
						src={experience.icon}
						alt={experience.company_name}
						className='w-[60%] h-[60%] object-contain'
					/>
				</div>
			}>
			<div>
				<h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
				<p
					className='text-secondary text-[16px] font-semibold m-0'
					style={{ margin: 0 }}>
					{experience.company_name}
				</p>
			</div>

			<ul className='mt-5 ml-5 space-y-2 list-disc'>
				{experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className='pl-1 mb-4 text-sm tracking-wider white-100 md:text-[1rem]'>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

export default ExperienceCard;
