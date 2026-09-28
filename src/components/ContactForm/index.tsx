'use client';

import Button from '@/components/Button';
import { FormEvent, useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const ContactForm = () => {
	const [token, setToken] = useState<string | null>(null);
	const [captchaError, setCaptchaError] = useState(false);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!token) {
			setCaptchaError(true);
			return;
		}
		console.log(name, email, message);
	};

	return (
		<div className='card border-2 border-zinc-700 p-3'>
			<h2 className='mb-5 py-3 text-gray-300 lg:text-4xl'>
				Siempre estoy abierto a nuevos
				<span className='font-bold text-white'> proyectos, trabajos y asociaciones.</span>
			</h2>

			<form className='space-y-3' onSubmit={handleSubmit}>
				<fieldset className='fieldset w-full'>
					<label htmlFor='contact-name' className='fieldset-legend'>
						¿Cuál es tu nombre?
					</label>
					<input
						required
						id='contact-name'
						autoComplete='name'
						value={name}
						onChange={(e) => setName(e.target.value)}
						type='text'
						className='input w-full'
					/>
				</fieldset>
				<fieldset className='fieldset w-full'>
					<label htmlFor='contact-email' className='fieldset-legend'>
						¿Cuál es tu correo de contacto?
					</label>
					<input
						required
						id='contact-email'
						autoComplete='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type='email'
						className='input w-full'
					/>
				</fieldset>
				<fieldset className='fieldset w-full'>
					<label htmlFor='contact-message' className='fieldset-legend'>
						¿Cuál es tu mensaje?
					</label>
					<textarea
						required
						id='contact-message'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						className='textarea w-full'
					/>
				</fieldset>
				<div>
					<HCaptcha
						sitekey={process.env.NEXT_PUBLIC_HCAPTCHA ?? ''}
						onVerify={(token) => {
							setToken(token);
							setCaptchaError(false);
						}}
					/>
					{captchaError && !token && (
						<p className='my-1 text-sm text-error' role='alert'>
							Tiene que resolver el captcha
						</p>
					)}
				</div>
				<Button type='submit' variant='outline'>
					Enviar
				</Button>
			</form>
		</div>
	);
};

export default ContactForm;
