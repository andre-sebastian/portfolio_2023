'use client';

import Button from '@/components/Button';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<div className='flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center'>
			<h1 className='font-serif text-4xl font-bold text-white'>
				Algo salió mal
			</h1>
			<p className='text-base-content'>
				Ocurrió un error inesperado. Puedes intentar de nuevo o volver al
				inicio.
			</p>
			<div className='flex flex-wrap justify-center gap-3'>
				<Button onClick={reset} variant='primary'>
					Reintentar
				</Button>
				<Button href='/' variant='neutral'>
					Volver al inicio
				</Button>
			</div>
			{error.digest && (
				<p className='text-sm text-base-content/70'>
					Código de error: {error.digest}
				</p>
			)}
		</div>
	);
}
