import userInfo from '@/data/userInfoData';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

const SITE_NAME = 'Andre Sebastian Reinoso';

const FULL_NAME = `${userInfo.name} ${userInfo.lastname}`;

const SITE_TITLE = `${FULL_NAME} | ${userInfo.profession.trim()}`;

const PROFILE_IMAGE = '/assets/images/andre.jpeg';

const absoluteUrl = (path: string): string => new URL(path, SITE_URL).toString();

const PERSON_JSON_LD = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: FULL_NAME,
	url: SITE_URL,
	jobTitle: userInfo.profession.trim(),
	email: userInfo.email,
	image: absoluteUrl(PROFILE_IMAGE),
	sameAs: [
		userInfo.social.github,
		userInfo.social.linkedin,
		userInfo.social.twitter,
		userInfo.social.facebook,
	],
};

export {
	SITE_URL,
	SITE_NAME,
	FULL_NAME,
	SITE_TITLE,
	PROFILE_IMAGE,
	PERSON_JSON_LD,
	absoluteUrl,
};
