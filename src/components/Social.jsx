import React from 'react';

const Social = ({ pdf, linkedin, github }) => {
	return (
		<div className='flex'>
			<div
				onClick={() =>
					window.open('https://www.linkedin.com/in/safet-duranovic/', '_blank')
				}
				className='flex items-center justify-center w-10 h-10 bg-blue-700 rounded-full cursor-pointer'>
				<img
					src={linkedin}
					title='Linkedin'
					alt='source code'
					className='object-contain w-1/2 h-1/2'
				/>
			</div>
			<div
				onClick={() => window.open('https://github.com/kremsnita420', '_blank')}
				className='flex items-center justify-center w-10 h-10 ml-4 rounded-full cursor-pointer black-gradient'>
				<img
					src={github}
					title='Github'
					alt='source code'
					className='object-contain w-1/2 h-1/2'
				/>
			</div>
		</div>
	);
};

export default Social;
