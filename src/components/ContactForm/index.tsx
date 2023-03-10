import { FormEvent, useRef, useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const ContactForm = () => {
	const [token, setToken] = useState<string | null>(null);
	const captchaRef = useRef<any>(null);

	const [loading, setLoading] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(name, email, message);
	};

	return (
		<>
			<div className='card border-2 border-zinc-700 p-3'>
				<h2 className='mb-5 py-3 text-gray-300 lg:text-4xl '>
					Siempre estoy abierto a nuevos
					<span className='font-bold  text-white'>
						{' '}
						proyectos, trabajos y asociaciones.
					</span>
				</h2>

				<form className='space-y-3' onSubmit={handleSubmit}>
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>¿Cuál es tu nombre?</span>
						</label>
						<input
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
							type='text'
							className={`input input-bordered w-full `}
						/>
					</div>
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>
								¿Cuál es tu correo de contacto?
							</span>
						</label>
						<input
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type='email'
							className={`input input-bordered w-full `}
						/>
					</div>
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>Cuál es tu mensaje?</span>
						</label>
						<textarea
							required
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className={`textarea w-full `}
						/>
					</div>
					<HCaptcha
						sitekey={process.env.NEXT_PUBLIC_HCAPTCHA ?? ''}
						onVerify={(e) => setToken(e)}
						ref={captchaRef}
					/>
					{!token && (
						<p className='my-1 text-sm text-error'>
							Tiene que solucionar el captcha
						</p>
					)}
					<button
						disabled={token ? false : true}
						type='submit'
						className={`btn btn-outline ${loading && 'loading'}`}>
						Enviar
					</button>
				</form>
			</div>
		</>
	);
};

export default ContactForm;
