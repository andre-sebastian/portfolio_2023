import { Fragment } from 'react';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import Button from '@/components/Button';
import { SOCIAL_LINKS, type SocialKey } from '@/util/socialLinks';

interface SocialIconEntry {
	Icon: typeof FaGithub;
	iconClass: string;
}

const socialIcons: Record<SocialKey, SocialIconEntry> = {
	github: { Icon: FaGithub, iconClass: 'text-white' },
	linkedin: { Icon: FaLinkedinIn, iconClass: 'text-linkedin' },
	twitter: { Icon: FaTwitter, iconClass: 'text-twitter' },
};

type SocialLinksVariant = 'buttons' | 'icons';

interface SocialLinksProps {
	variant?: SocialLinksVariant;
	wrapperClassName?: string;
	itemClassName?: string;
}

const SocialLinks = ({
	variant = 'buttons',
	wrapperClassName,
	itemClassName,
}: SocialLinksProps) => (
	<div className={wrapperClassName}>
		{SOCIAL_LINKS.map(({ key, label, href }) => {
			const { Icon, iconClass } = socialIcons[key];

			const content =
				variant === 'icons' ? (
					<a
						href={href}
						target='_blank'
						rel='noopener noreferrer'
						aria-label={`Perfil de ${label}`}
						className='focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
						<Icon size={24} aria-hidden='true' className={iconClass} />
					</a>
				) : (
					<Button
						href={href}
						variant='secondary'
						target='_blank'
						rel='noopener noreferrer'
						aria-label={`Perfil de ${label}`}>
						<Icon size={20} aria-hidden='true' className={iconClass} />
					</Button>
				);

			return itemClassName ? (
				<div key={key} className={itemClassName}>
					{content}
				</div>
			) : (
				<Fragment key={key}>{content}</Fragment>
			);
		})}
	</div>
);

export default SocialLinks;
