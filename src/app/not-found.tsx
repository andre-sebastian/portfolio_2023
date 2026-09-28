import PageShell from '@/components/PageShell';
import Button from '@/components/Button';
import Panel from '@/components/Panel';

export default function NotFound() {
	return (
		<PageShell activePage=''>
			<Panel>
				<div className='card-body text-center'>
					<h1 className='mb-5 bg-linear-to-br from-[#1f4c39] to-[#2d6a4f] bg-clip-text py-3 font-serif text-8xl font-extrabold text-white text-transparent'>
						404
					</h1>
					<p className='mb-5 py-3 text-xl text-white'>
						Ups, no se encontró lo que buscas
					</p>
					<Button href='/' className='mx-auto'>
						Volver al inicio
					</Button>
				</div>
			</Panel>
		</PageShell>
	);
}
