import type { Metadata } from 'next';
import { Roboto_Slab, Poppins } from 'next/font/google';
import userInfo from '@/data/userInfoData';
import {
	FULL_NAME,
	PERSON_JSON_LD,
	PROFILE_IMAGE,
	SITE_NAME,
	SITE_URL,
	SITE_TITLE,
} from '@/util/site';
import '../styles/globals.css';

const roboto_slab = Roboto_Slab({
	subsets: ['latin'],
	variable: '--font-roboto-slab',
	display: 'swap',
});
const poppins = Poppins({
	subsets: ['latin'],
	variable: '--font-poppins',
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: SITE_TITLE,
		template: `%s | ${SITE_NAME}`,
	},
	description: userInfo.bio,
	authors: [{ name: FULL_NAME }],
	openGraph: {
		type: 'website',
		locale: 'es_ES',
		url: '/',
		siteName: SITE_NAME,
		title: SITE_TITLE,
		description: userInfo.bio,
		images: [
			{
				url: PROFILE_IMAGE,
				width: 512,
				height: 512,
				alt: FULL_NAME,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: SITE_TITLE,
		description: userInfo.bio,
		images: [PROFILE_IMAGE],
		creator: userInfo.social.twitter,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='es'
			className={`${roboto_slab.variable} ${poppins.variable}`}>
			<body>
				<a href='#contenido' className='skip-link'>
					Saltar al contenido principal
				</a>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(PERSON_JSON_LD),
					}}
				/>
				<main className='font-sans'>{children}</main>
			</body>
		</html>
	);
}
