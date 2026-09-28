import Image from 'next/image';
import SocialLinks from '@/components/SocialLinks';
import userInfo from '@/data/userInfoData';
import { FULL_NAME, PROFILE_IMAGE } from '@/util/site';

async function Footer() {
	'use cache';

	return (
		<footer className='footer bg-neutral text-neutral-content sm:footer-horizontal p-6 md:p-10'>
			<aside>
				<Image
					src={PROFILE_IMAGE}
					alt=''
					width={50}
					height={50}
					className='h-[50px] w-[50px] rounded-full object-cover'
				/>
				<p>
					{FULL_NAME}
					<br />
					{userInfo.profession.trim()}
				</p>
				<p>
					Copyright © {new Date().getFullYear()} - Todos los derechos
					reservados
				</p>
			</aside>
			<nav aria-label='Redes sociales'>
				<h6 className='mb-2 font-semibold uppercase'>Social</h6>
				<SocialLinks
					variant='icons'
					wrapperClassName='grid grid-flow-col gap-4'
				/>
			</nav>
		</footer>
	);
}

export default Footer;
