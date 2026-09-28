import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/util/site';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	'use cache';

	const routes = ['/', '/about', '/resume', '/contact'];

	return routes.map((path) => ({
		url: absoluteUrl(path),
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: path === '/' ? 1 : 0.7,
	}));
}
