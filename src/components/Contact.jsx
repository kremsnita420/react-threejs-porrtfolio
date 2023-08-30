import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

function Contact() {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [loading, setLoading] = useState(false);

	const EMAILJS_SERVICE_ID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
	const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
	const EMAILJS_EMAIL = import.meta.env.VITE_APP_EMAILJS_EMAIL;
	const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

	const handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				EMAILJS_SERVICE_ID,
				EMAILJS_TEMPLATE_ID,
				{
					from_name: form.name,
					to_name: 'Safet Duranovic',
					from_email: form.email,
					to_email: EMAILJS_EMAIL,
					message: form.message,
				},
				EMAILJS_PUBLIC_KEY
			)
			.then(
				() => {
					setLoading(false);
					alert('Thank you. I will get back to you as soon as possible.');

					setForm({
						name: '',
						email: '',
						message: '',
					});
				},
				(error) => {
					setLoading(false);
					console.error(error);

					alert('Something went wrong. Please try again.');
				}
			);
	};

	return (
		<div className='flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row'>
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className='flex-[0.75] bg-black-100 p-5 md:p-8 rounded-2xl'>
				<p className={styles.sectionSubText}>Get in touch</p>
				<h3 className={styles.sectionHeadText}>Contact.</h3>
				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className='flex flex-col gap-8 mt-12'>
					<label className='flex flex-col'>
						<span className='flex font-medium text-white'>
							<span className='mr-2 text-2xl md:text-4xl font-display'>*</span>
							Your Name
						</span>
						<input
							type='text'
							name='name'
							value={form.name}
							required
							onChange={handleChange}
							placeholder="What's your name?"
							className='px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary'
						/>
					</label>
					<label className='flex flex-col'>
						<span className='flex font-medium text-white'>
							<span className='mr-2 text-2xl md:text-4xl font-display'>*</span>
							Your email
						</span>
						<input
							type='email'
							name='email'
							value={form.email}
							required
							onChange={handleChange}
							placeholder='Your email address?'
							className='px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary'
						/>
					</label>
					<label className='flex flex-col'>
						<span className='flex font-medium text-white'>
							<span className='mr-2 text-2xl md:text-4xl font-display'>*</span>
							Your Message
						</span>
						<textarea
							rows={7}
							name='message'
							value={form.message}
							required
							onChange={handleChange}
							placeholder='What you want to say?'
							className='px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary'
						/>
					</label>
					<p className='flex'>
						<span className='mr-2 text-2xl md:text-4xl font-display'>*</span>
						Required fields
					</p>
					<button
						type='submit'
						className='flex items-center w-fit justify-center px-4 py-2 mt-4 text-lg transition-transform border rounded-xl cursor-pointer hover:translate-y-[2px] hover:translate-x-[2px] md:text-2xl'>
						{loading ? 'Sending...' : 'Send'}
					</button>
				</form>
			</motion.div>
			<motion.div
				variants={slideIn('right', 'tween', 0.2, 1)}
				className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
				<EarthCanvas />
			</motion.div>
		</div>
	);
}

export default SectionWrapper(Contact, 'contact');
