import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Roboto_Slab, Poppins } from 'next/font/google';

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
/**
 * 
import "@fontsource/roboto-slab";
import "@fontsource/poppins";
 */

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${roboto_slab.variable} ${poppins.variable} font-sans`}>
			<Component {...pageProps} />
		</main>
	);
}
