import type { Metadata } from 'next';
import Image from 'next/image';
import { FaDownload } from '@react-icons/all-files/fa/FaDownload';
import userInfo from '@/data/userInfoData';
import PageShell from '@/components/PageShell';
import Button from '@/components/Button';
import SocialLinks from '@/components/SocialLinks';
import { FULL_NAME, PROFILE_IMAGE, SITE_TITLE } from '@/util/site';

export const metadata: Metadata = {
	title: {
		absolute: SITE_TITLE,
	},
	alternates: { canonical: '/' },
};

export default function Page() {
	return (
		<PageShell activePage='home' showFooter={false}>
			<div className='col-span-12 lg:col-span-4'></div>
			<div className='col-span-12 p-4 text-center lg:col-span-4'>
				<Image
					priority
					alt={`Foto de perfil de ${FULL_NAME}`}
					width={448}
					height={448}
					className='mx-auto mb-6 h-56 w-56 rounded-full'
					src={PROFILE_IMAGE}
				/>
				<h1 className='my-2 text-2xl font-bold text-white'>
					{userInfo.name}
				</h1>
				<p className='my-2 text-base font-extralight text-base-content'>
					{userInfo.profession}
				</p>
				<SocialLinks
					wrapperClassName='my-4 grid grid-cols-12 gap-2'
					itemClassName='col-span-4'
				/>
				<Button
					href='/assets/pdf/cv.pdf'
					download
					variant='link'
					block
					className='my-2 gap-2 normal-case text-white no-underline'>
					<FaDownload size={20} aria-hidden='true' className='text-white' />
					Descargar CV
				</Button>
			</div>
			<div className='col-span-12 lg:col-span-4'></div>
		</PageShell>
	);
}
