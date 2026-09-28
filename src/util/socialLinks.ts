import userInfo from '@/data/userInfoData';

type SocialKey = 'github' | 'linkedin' | 'twitter';

interface SocialLink {
	key: SocialKey;
	label: string;
	href: string;
}

const SOCIAL_LINKS: Array<SocialLink> = [
	{ key: 'github', label: 'GitHub', href: userInfo.social.github },
	{ key: 'linkedin', label: 'LinkedIn', href: userInfo.social.linkedin },
	{ key: 'twitter', label: 'Twitter', href: userInfo.social.twitter },
];

export type { SocialKey, SocialLink };
export { SOCIAL_LINKS };
