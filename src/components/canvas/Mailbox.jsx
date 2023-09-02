/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Mailbox = () => {
	const Mailbox = useGLTF('./planet/scene.gltf');

	return (
		<mesh>
			<hemisphereLight
				intensity={0.45}
				groundColor='black'
			/>
			<primitive
				object={Mailbox.scene}
				scale={2.5}
				position-x={0}
				position-y={-2}
			/>
		</mesh>
	);
};

const MailboxCanvas = () => {
	return (
		<Canvas
			shadows
			frameloop='demand'
			dpr={[1, 2]}
			gl={{ preserveDrawingBuffer: true }}
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				position: [-4, 3, 6],
			}}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					autoRotate
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Mailbox />

				<Preload all />
			</Suspense>
		</Canvas>
	);
};

export default MailboxCanvas;
