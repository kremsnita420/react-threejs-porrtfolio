import { Html, useProgress } from '@react-three/drei';

const HeroLoader = () => {
	const { progress } = useProgress();
	return (
		<Html
			as='div'
			center
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				transform: 'translateY(100%)',
			}}>
			<span className='canvas-loader'></span>
			<p
				style={{
					fontSize: 14,
					color: '#F1F1F1',
					fontWeight: 800,
					marginTop: 40,
				}}>
				{progress.toFixed(1)}%
			</p>
		</Html>
	);
};

export default HeroLoader;
