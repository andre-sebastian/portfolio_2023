import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import userInfo from '../../data/userInfoData';

const Footer = () => (
	<footer className='footer items-center bg-base-200 p-4 text-neutral-content'>
		<div className='grid-flow-col items-center text-center lg:text-left'>
			<p>Copyright © {String(new Date().getFullYear())} - Todos los derechos reservados</p>
		</div>
		<div className='grid-flow-col gap-1 md:place-self-center md:justify-self-end'>
			{/* <button
				onClick={() => window.open(userInfo.social.facebook, '_blank')}
				className=' btn btn-secondary'>
				<FaFacebookF size={20} className='text-[#1877F2]' />
			</button> */}
			<button
				onClick={() => window.open(userInfo.social.github, '_blank')}
				className='btn btn-secondary '>
				<FaGithub size={20} className='text-white' />
			</button>
			<button
				onClick={() => window.open(userInfo.social.linkedin, '_blank')}
				className='btn btn-secondary '>
				<FaLinkedinIn size={20} className='text-[#0A66C2]' />
			</button>
			<button
				onClick={() => window.open(userInfo.social.twitter, '_blank')}
				className='btn btn-secondary '>
				<FaTwitter size={20} className='text-[#1DA1F2]' />
			</button>
		</div>
	</footer>
);
export default Footer;
