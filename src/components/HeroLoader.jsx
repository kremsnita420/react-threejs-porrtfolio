import { Html, useProgress } from '@react-three/drei';

const HeroLoader = () => {
	const { progress } = useProgress();
	return (
		<Html
			as='div'
			center
			style={{
				position: 'absolute',
				background: ' rgb(170,166,195)',
				// eslint-disable-next-line no-dupe-keys
				background:
					'linear-gradient(45deg, rgba(170,166,195,1) 0%, rgba(28,48,93,1) 65%)',
				width: '100dvw',
				height: '100dvh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}>
			<span className='canvas-loader'></span>
			<p
				style={{
					fontSize: 14,
					color: '#F1F1F1',
					fontWeight: 800,
					marginTop: 40,
				}}>
				{progress.toFixed(0)}%
			</p>
			<div className='bird-container bird-container--one'>
				<div className='bird bird--one'></div>
			</div>

			<div className='bird-container bird-container--two'>
				<div className='bird bird--two'></div>
			</div>

			<div className='bird-container bird-container--three'>
				<div className='bird bird--three'></div>
			</div>

			<div className='bird-container bird-container--four'>
				<div className='bird bird--four'></div>
			</div>
		</Html>
	);
};

export default HeroLoader;
