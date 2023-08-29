// eslint-disable-next-line react/prop-types
const Social = ({ linkedin, github }) => {
	return (
		<div className='flex'>
			<div
				onClick={() =>
					window.open('https://www.linkedin.com/in/safet-duranovic/', '_blank')
				}
				className='flex items-center justify-center w-10 h-10 transition-transform bg-blue-700 border rounded-full cursor-pointer hover:scale-95'>
				<img
					src={linkedin}
					title='Linkedin'
					alt='source code'
					className='object-contain w-1/2 h-1/2'
				/>
			</div>
			<div
				onClick={() => window.open('https://github.com/kremsnita420', '_blank')}
				className='flex items-center justify-center w-10 h-10 ml-4 transition-transform border rounded-full cursor-pointer hover:scale-95 black-gradient'>
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
