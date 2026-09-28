'use client';

import '../styles/globals.css';
import Button from '@/components/Button';

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<html lang='es'>
			<body>
				<div className='bg-image flex min-h-screen w-full flex-col items-center justify-center gap-4 px-4 text-center'>
					<h1 className='font-serif text-4xl font-bold text-white'>
						Algo salió mal
					</h1>
					<p className='text-base-content'>
						Ocurrió un error inesperado. Intenta de nuevo.
					</p>
					<Button onClick={reset} variant='primary'>
						Reintentar
					</Button>
				</div>
			</body>
		</html>
	);
}
